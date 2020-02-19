export default {
    name: 'project' ,

    data () {
        return {
            form: {
                push_type: 'multiple' ,
                role: 'all' ,
                type: 'system' ,
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
            Api.push.detail(this.param.id , (res) => {
                if (res.role == 'designation') {
                    // 推送给指定用户
                    if (G.isValid(res.user_id)) {
                        res.user_id = G.jsonDecode(res.user_id).join(',');
                    }
                }
                this.form = res;
            } , (data) => {
                this.alert(data);
            } , () => {
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
            Api.push[this.param.mode](this.form , (res) => {
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
                            name: '推送列表' ,
                            callback () {
                                self.location('/push/list');
                            } ,
                        } ,
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