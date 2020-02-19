export default {
    name: "v-route" ,
    data () {
        return {
            form: {
                method: 'NONE' ,
                type: 'view' ,
                p_id: 0 ,
                weight: 0 ,
                enable: 1 ,
                hidden: 0 ,
                menu: 0 ,
            } ,
            error: {} ,
            dom: {} ,
            ins: {
                loading: null ,
            },
            pending: {} ,
            callback: {} ,
            routes: [] ,
            value: {
                mapping: {
                    id: 'id' ,
                    floor: 'floor' ,
                    name: 'cn' ,
                } ,
            } ,
        };
    } ,
    created () {

    } ,
    mounted () {
        this.initDom();
        this.initIns();
        this.initialize();
    } ,

    methods: {
        initDom () {
            this.dom.sIco = G(this.$refs['s-ico']);
            this.dom.bIco = G(this.$refs['b-ico']);
        } ,

        initIns () {
            let self = this;

            this.ins.loading = this.$refs.loading.ins.loading;

            // 小图标
            this.ins.small = new UploadImage(this.dom.sIco.get(0) , {
                mode: 'override' ,
                url:  topContext.upload ,
                field: 'file' ,
                success (res , code) {
                    if (G.isFunction(self.callback.small)) {
                        self.callback.small(res , code);
                    }
                } ,
                image: {
                    delete_unfocus: topContext.pluginRes.UploadImage.image.deleteUnfocus
                } ,
            });

            // 大图标
            this.ins.big = new UploadImage(this.dom.bIco.get(0) , {
                mode: 'override' ,
                url:  topContext.upload ,
                field: 'file' ,
                success (res , code) {
                    if (G.isFunction(self.callback.big)) {
                        self.callback.big(res , code);
                    }
                } ,
                image: {
                    delete_unfocus: topContext.pluginRes.UploadImage.image.deleteUnfocus
                } ,
            });
        } ,

        initialize () {
            this.ins.loading.show();
            if (this.param.mode == 'edit') {
                new Promise((resolve , reject) => {
                    this.getRoute((data , code) => {
                        this.routes = data;
                        resolve(true);
                    } , (data , code) => {
                        this.alert(data);
                        resolve(false);
                    });
                }).then((next) => {
                    if (!next) {
                        return false;
                    }
                    this.getData((data , code) => {
                        this.form = data;
                    } , (data) => {
                        this.alert(data);
                    });
                }).finally(() => {
                    this.ins.loading.hide();
                });
            } else {
                this.getRoute((data , code) => {
                    this.routes = data;
                } , (data , code) => {
                    this.alert(data);
                } , () => {
                    this.ins.loading.hide();
                });
            }
        } ,

        getRoute (success , error , callback) {
            Api.route.all(success , error , callback);
        } ,

        getData (success , error , callback) {
            Api.route.detail(this.param.id , success , error , callback);
        } ,

        // 获取数据
        check (data) {

        } ,

        submit () {
            if (this.pending.submit) {
                this.alert('请求中...请耐心等待');
                return ;
            }
            this.pending.submit = true;
            this.ins.loading.show();
            this.ins.loading.listen('close' , () => {
                this.pending.submit = false;
            });
            let self = this;
            new Promise((resolve , reject) => {
                // 上传小图
                if (this.ins.small.empty()) {
                    resolve(true);
                    return ;
                }
                this.callback.small = (res) => {
                    if (res.code != 0) {
                        this.alert(res.data);
                        resolve(false);
                        return ;
                    }
                    this.form.s_ico = res.data;
                    resolve(true);
                };
                this.ins.small.upload();
            }).then((next) => {
                // 上传大图
                if (!next) {
                    return ;
                }
                return new Promise((resolve , reject) => {
                    if (this.ins.big.empty()) {
                        resolve(true);
                        return ;
                    }
                    this.callback.big = (res) => {
                        if (res.code != 0) {
                            this.alert(res.data);
                            resolve(false);
                            return ;
                        }
                        this.form.b_ico = res.data;
                        resolve(true);
                    };
                    this.ins.big.upload();
                });
            }).then((next) => {
                // 上传表单
                if (!next) {
                    return ;
                }
                return new Promise((resolve , reject) => {
                    Api.route[this.param.mode](this.form , () => {
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
                                    name: '路由列表' ,
                                    callback () {
                                        this.hide();
                                        self.location('/route/list');
                                    } ,
                                }
                            ] ,
                        });
                    } , (data , code) => {
                        this.error = {};
                        if (code != -400) {
                            return ;
                        }
                        this.error = data;
                        this.vScroll(G.v.firstKey(this.error));
                    } , () => {
                        resolve();
                    });
                });
            }).finally(() => {
                // 事后处理
                this.ins.loading.hide();
                this.ins.loading.listen('close' , null);
                this.pending.submit = false;
            });
        } ,
    }
}