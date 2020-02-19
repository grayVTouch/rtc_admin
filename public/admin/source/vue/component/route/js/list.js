export default {
    name: "v-list" ,
    data () {
        return {
            form: {} ,
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
            Api.route.all((res) => {
                this.listData = res;
            } , null , () => {
                this.ins.loading.hide();
                this.ins.loading.listen('close' , null);
                this.pending.get = false;
            });
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

        // 重新加载页面
        reloadData () {
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
                            Api.route.del(idList , (res) => {
                                self.alert('操作成功');
                                // 重新加载页面
                                self.reloadData();
                            } , (data , code) => {
                                self.alert(data);
                            } , () => {
                                self.pending.del = false;
                                self.ins.loading.hide();
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

        singleEdit (val , extra) {
            this.ins.loading.show();
            Api.route.singleEdit({
                id: extra.id ,
                field: extra.field ,
                value: val ,
            } , null , (data) => {
                this.alert(data);
            } , () => {
                this.reloadData();
            });
        } ,
    } ,

}

