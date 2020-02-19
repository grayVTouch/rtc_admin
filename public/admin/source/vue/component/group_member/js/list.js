export default {
    name: "v-list" ,
    data () {
        return {
            form: {
                group_id: 0 ,
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
        this.form.group_id = this.param.group_id;
    } ,

    mounted () {
        // 获取数据
        this.initDom();
        this.initIns();
        this.getData();
    } ,

    methods: {
        // 初始化 dom
        initDom () {

        } ,

        // 初始化必须的实例
        initIns () {
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
            Api.group_member.list(this.form , (res) => {
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
            this.reloadData();
        } ,

        order (value) {
            this.form.order = value;
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
            this.reloadData(true);
        } ,

        // 重新加载页面
        reloadData (pageReset = false) {
            if (pageReset) {
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
                            Api.group_member.del(idList , (res) => {
                                self.alert('操作成功');
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

        singleEdit (value , extra) {
            const self = this;
            this.ins.loading.show();
            Api.group_member.singleEdit({
                id: extra.id ,
                field: extra.field ,
                value ,
            } , null , (data , code) => {
                this.alert(data);
            } , () => {
                self.reloadData();
            })
        } ,
    } ,

}

