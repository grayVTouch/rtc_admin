export default {
    name: "v-list" ,
    data () {
        return {
            form: {
                id: '' ,
                username: '' ,
                phone: '' ,
                order: '' ,
                page: 1 ,
                limit: topContext.page.limit ,
            } ,
            ins: {
                loading: null ,
            } ,
            pending: {
                del: null ,
            } ,
            dom: {} ,
            listData: [] ,
            // 待删除的记录 id 列表
            idList: [] ,
            page: {
                total: 0
            }

        };
    } ,

    created () {

    } ,

    mounted () {
        // 获取数据
        this.initDom();
        this.initInstance();
        this.getData();
    } ,

    components: {
        'vv-switch': {
            props: {
                id: {
                    required: true ,
                } ,
                join_friend_method_id: {
                    required: true
                } ,
                value: {
                    default: 0
                } ,
            } ,
            data () {
                return {
                    valueCopy: 0 ,
                };
            } ,
            created () {
                this.valueCopy = this.value;
            } ,
            model: {
                prop: 'value' ,
                event: 'change' ,
            } ,
            methods: {
                changeEvent (val) {
                    this.$emit('on-change' , this.id , this.join_friend_method_id , val);
                } ,
            } ,
            watch: {
                valueCopy (newVal , oldVal) {
                    this.$emit('change' , newVal);
                } ,

                value (newVal , oldVal) {
                    this.valueCopy = newVal;
                } ,
            } ,
            template: `<v-switch v-model="valueCopy" size="small" @on-change="changeEvent"></v-switch>`
        } ,

        'vvv-switch': {
            props: {
                id: {
                    required: true ,
                } ,
                field: {
                    required: true
                } ,
                value: {
                    default: 0
                } ,
            } ,
            data () {
                return {
                    valueCopy: 0 ,
                };
            } ,
            created () {
                this.valueCopy = this.value;
            } ,

            model: {
                prop: 'value' ,
                event: 'change' ,
            } ,
            methods: {
                changeEvent (val) {
                    this.$emit('on-change' , this.id , this.field , val);
                } ,
            } ,
            watch: {
                valueCopy (newVal , oldVal) {
                    this.$emit('change' , newVal);
                } ,

                value (newVal , oldVal) {
                    this.valueCopy = newVal;
                } ,
            } ,
            template: `<v-switch v-model="valueCopy" size="small" @on-change="changeEvent"></v-switch>`
        } ,
    } ,

    methods: {
        // 初始化 dom
        initDom () {

        } ,

        // 初始化必须的实例
        initInstance () {
            this.ins.loading = this.$refs.loading.ins.loading;
        } ,

        // 获取数据
        getData () {
            if (this.pending.get) {
                this.alert('请求中...请耐心等待');
                return ;
            }
            this.pending.get = true;
            this.ins.loading.listen('close' , () => {
                this.pending.get = false;
            });
            this.ins.loading.show();
            Api.admin.list(this.form , (res) => {
                this.listData = res.data;
                this.form.page = res.current_page;
                this.page.total = res.total;
            } , null , () => {
                this.ins.loading.hide();
                this.ins.loading.listen('close' , null);
                this.pending.get = false;
            });
        } ,

        pageEvent (page) {
            this.form.page = page;
            this.submit();
        } ,

        order (e) {
            const tar = G(e.currentTarget);
            this.form.order = tar.data('order');
            this.reloadData(true);
        } ,

        selectEvent (id) {
            const index = this.idList.indexOf(id);
            if (index >= 0) {
                this.idList.splice(index , 1);
                return ;
            }
            this.idList.push(id);
        } ,

        selectAllEvent (selected) {
            if (selected) {
                this.selectedAll();
            } else {
                this.unselectedAll();
            }
        } ,

        selectedAll () {
            let i;
            let v;
            this.idList = [];
            for (i = 0; i < this.listData.length; ++i)
            {
                v = this.listData[i];
                this.idList.push(v.id);
            }
        } ,

        unselectedAll () {
            this.idList = [];
        } ,

        submit () {
            this.form.page = 1;
            this.getData();
        } ,

        // 重新加载页面
        reloadData (pageResize = false) {
            if (pageResize) {
                this.form.page = 1;
            }
            this.getData();
        } ,

        // 删除时间
        del (idList) {
            const self = this;
            this.alert('确定删除吗？' , {
                btn: [
                    {
                        name: '删除' ,
                        callback () {
                            this.hide();
                            self.ins.loading.show();
                            self.ins.loading.listen('close' , () => {
                                self.pending.del = false;
                            });
                            Api.admin.del(idList , (res) => {
                                Prompt.alert('操作成功');
                                // 重新加载页面
                                self.reloadData();
                            } , null , () => {
                                self.pending.del = false;
                                self.ins.loading.listen('close' , null);
                            });
                        } ,
                    } ,
                    {
                        name: '取消' ,
                        callback () {
                            this.hide();
                        } ,
                    }
                ] ,
            });
        } ,
    } ,

}

