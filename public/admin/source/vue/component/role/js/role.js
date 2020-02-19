export default {
    name: 'role' ,

    data () {
        return {
            form: {
                id: '' ,
                name: '' ,
                weight: 0 ,
            } ,
            error: {} ,
            ins: {
                loading: null ,
            } ,
            pending: {
                submit: null ,
            } ,

        };
    } ,

    created () {

    } ,

    mounted () {
        this.initDom();
        this.initIns();
        this.getData();
    } ,

    methods: {
        // 获取数据
        getData () {
            if (this.param.mode != 'edit') {
                // 非编辑模式，跳过
                return ;
            }
            this.ins.loading.show();
            Api.role.detail(this.param.id , (res) => {
                this.form = res;
            } , null , () => {
                this.ins.loading.hide();
            });
        } ,

        initDom () {} ,

        initIns () {
            this.ins.loading = this.$refs.loading.ins.loading;
        } ,

        check () {
            return true;
        } ,

        // 提交
        submit () {
            if (this.pending.submit) {
                this.alert('请求中...请耐心等待');
                return ;
            }
            if (!this.check()) {
                return ;
            }
            this.ins.loading.listen('close' , () => {
                this.pending.submit = false;
            });
            this.pending.submit = true;
            this.ins.loading.show();
            const self = this;
            Api.role[this.param.mode](this.form , (res) => {
                this.alert('操作成功' , {
                    btn: [
                        {
                            name: '角色列表' ,
                            callback () {
                                self.location('/role/list');
                            } ,
                        } ,
                        {
                            name: '继续' + (this.param.mode == 'edit' ? '编辑' : '添加') ,
                            callback () {
                                this.hide();
                            } ,
                        }
                    ]
                });
            } , (data , code) => {
                this.error = {};
                if (code != -400) {
                    return ;
                }
                this.error = data;
                this.vScroll(G.v.firstKey(this.error));
            } , () => {
                this.pending.submit = false;
                this.ins.loading.hide();
                this.ins.loading.listen('close' , null);
            });
        } ,
    } ,


};