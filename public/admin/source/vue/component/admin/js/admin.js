

export default {
    name: "admin" ,
    data () {
        return {
            form: {},
            error: {} ,
            ins: {
                loading: null ,
            } ,
            role: [] ,
            dom: {} ,
            pending: {} ,
            callback: {} ,
        };
    } ,

    mounted () {
        this.initDom();
        this.initIns();
        this.initialize();
        this.getData();
    } ,

    methods: {
        initDom () {
            this.dom.avatar = G(this.$refs.avatar);
        } ,

        initIns () {
            const self = this;
            this.ins.loading = this.$refs.loading.ins.loading;
            this.ins.avatar = new UploadImage(this.dom.avatar.get(0) , {
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
                    if (G.isFunction(self.callback.avatar)) {
                        self.callback.avatar(res.data , res.code);
                    }
                } ,
                image: {
                    delete_unfocus: topContext.pluginRes.UploadImage.image.deleteUnfocus
                } ,
            });
        } ,

        initialize () {
            new Promise((resolve , reject) => {
                this.ins.loading.show();
                // 获取角色数据
                Api.role.all((data) => {
                    this.role = data;
                    resolve(true);
                } , () => {
                    resolve(false);
                });
            }).then((next) => {
                this.ins.loading.hide();
                if (!next) {
                    return ;
                }
                if (this.param.mode == 'edit') {
                    this.getData();
                }
            });
        } ,

        getData () {
            this.ins.loading.show();
            Api.admin.detail(this.param.id , (res) => {
                res.password = '';
                this.form = res;
            } , null , () => {
                this.ins.loading.hide();
            });
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
            new Promise((resolve , reject) => {
                if (this.ins.avatar.empty()) {
                    resolve(true);
                    return ;
                }
                this.callback.avatar = (res , code) => {
                    if (code != 0) {
                        this.alert(res);
                        resolve(false);
                        return ;
                    }
                    this.form.avatar = res;
                    resolve(true);
                };
                // 上传图片
                this.ins.avatar.upload();
            }).then((next) => {
                if (!next) {
                    return ;
                }
                return new Promise((resolve , reject) => {
                    Api.admin.edit(this.form , () => {
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
                                    name: '用户列表' ,
                                    callback () {
                                        this.hide();
                                        self.location('/admin/list');
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