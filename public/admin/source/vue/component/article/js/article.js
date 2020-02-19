

export default {
    name: "v-article" ,
    data () {
        return {
            form: {
                enable: 1 ,
                weight: 0 ,
                article_type_id: 0 ,
            },
            error: {} ,
            ins: {
                loading: null ,
            } ,
            dom: {} ,
            pending: {} ,
            callback: {} ,
            article_type: [] ,
            value: {
                attr: {
                    id: 'id' ,
                    floor: 'floor' ,
                    name: 'name' ,
                } ,
            } ,
        };
    } ,

    mounted () {
        this.initDom();
        this.initIns();
        this.initialize();
    } ,

    methods: {
        initDom () {
            this.dom.thumb = G(this.$refs.thumb);
        } ,

        initIns () {
            const self = this;

            this.ins.loading = this.$refs.loading.ins.loading;

            this.ins.thumb = new UploadImage(this.dom.thumb.get(0) , {
                // 图片上传链接
                url: topContext.upload ,
                // 待上传图片的表单字段名称：默认是 images
                field: 'file' ,
                // 默认模式是追加 append | override
                mode: 'override' ,
                // 单选 | 多选，默认多选
                multiple: false ,
                // 单张上传成功，每次上传成功后回调
                success (res) {
                    if (G.isFunction(self.callback.thumb)) {
                        self.callback.thumb(res.data , res.code);
                    }
                } ,
                image: {
                    delete_unfocus: topContext.pluginRes.UploadImage.image.deleteUnfocus
                } ,
            });

            this.ins.editor = new wangEditor(this.$refs.editor);
            this.ins.editor.customConfig.uploadImgServer = topContext.uploadForWangEditor;
            this.ins.editor.customConfig.uploadFileName = 'file[]';
            this.ins.editor.create();
        } ,

        initialize () {
            this.ins.loading.show();
            if (this.param.mode == 'edit') {
                new Promise((resolve) => {
                    this.getArticleType((data) => {
                        this.article_type = data;
                        resolve(true);
                    } , (data) => {
                        this.alert(data);
                        resolve(false);
                    });
                }).then((next) => {
                    if (!next) {
                        return ;
                    }
                    this.getArticle((data) => {
                        this.form = data;
                        // 初始化文章内容
                        this.ins.editor.txt.html(this.form.content);
                    } , (data) => {
                        this.alert(data);
                    } , () => {
                        this.ins.loading.hide();
                    });
                });
            } else {
                this.getArticleType((data) => {
                    this.article_type = data;
                } , (data) => {
                    this.alert(data);
                } , () => {
                    this.ins.loading.hide();
                })
            }
        } ,

        getArticle (success , error , callback) {
            Api.article.detail(this.param.id , success , error , callback);
        } ,

        getArticleType (success , error , callback) {
            Api.article_type.all(success , error , callback);
        } ,

        submit () {
            if (this.pending.submit) {
                this.alert('请求中...请耐心等待');
                return ;
            }
            this.ins.loading.show();
            this.ins.loading.listen('close' , () => {
                this.pending.submit = false;
            });
            this.pending.submit = true;
            const self = this;
            // 填充文章内容字段
            this.form.content = this.ins.editor.txt.html();
            new Promise((resolve , reject) => {
                if (this.ins.thumb.empty()) {
                    resolve(true);
                    return ;
                }
                this.callback.thumb = (res , code) => {
                    if (code != 0) {
                        this.alert(res);
                        resolve(false);
                        return ;
                    }
                    this.form.thumb = res;
                    resolve(true);
                };
                // 上传图片
                this.ins.thumb.upload();
            }).then((next) => {
                if (!next) {
                    return ;
                }
                return new Promise((resolve , reject) => {
                    Api.article[this.param.mode](this.form , () => {
                        this.error = {};
                        this.alert('操作成功' , {
                            btn: [
                                {
                                    name: '继续' + (this.param.mode == 'edit' ? '编辑' : '添加') ,
                                    callback () {
                                        this.hide();
                                    } ,
                                } ,
                                {
                                    name: '文章列表' ,
                                    callback () {
                                        this.hide();
                                        self.location('/article/list');
                                    } ,
                                }
                            ] ,
                        });
                    } , (res , code) => {
                        this.error = {};
                        if (code != -400) {
                            return ;
                        }
                        this.error = res;
                        this.vScroll(G.v.firstKey(this.error))
                    } , resolve);
                });
            }).finally(() => {
                this.pending.submit = false;
                this.ins.loading.hide();
                this.ins.loading.listen('close' , null);
            });
        } ,
    } ,
}