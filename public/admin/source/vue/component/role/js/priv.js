export default {
    name: "priv" ,
    data () {
        return {
            // 展开|收缩
            expand: true ,
            data: [] ,
            // 当前角色权限
            priv: [] ,
            // 路由列表
            routes: [] ,
            idList: [] ,
            ins: {
                tree: null ,
            } ,
            pending: {
                submit: null ,
            } ,
        };
    } ,

    mounted () {
        this.initDom();
        this.initIns();
        this.getData();
    } ,

    methods: {
        initDom () {

        } ,

        initIns () {
            this.ins.loading = this.$refs.loading.ins.loading;
            this.ins.tree = this.$refs.tree;
        } ,

        getData () {
            this.ins.loading.show();
            Api.role.priv(this.param.id , (res) => {
                this.priv = res.priv;
                this.handle(res.route);
                this.routes = res.route;
            } , null , () => {
                this.ins.loading.hide();
            });

        } ,

        handle (data) {
            for (let i = 0; i < data.length; ++i)
            {
                let cur = data[i];
                cur.title = cur.cn;
                cur.checked = this.isSelected(cur.id);
                cur.expand = this.expand;
                if (cur.children.length > 0) {
                    this.handle(cur.children);
                }
            }
        } ,

        // 是否选中
        isSelected (id) {
            for (let i = 0; i < this.priv.length; ++i)
            {
                let cur = this.priv[i];
                if (id == cur.id) {
                    return true;
                }
            }
            return false;
        } ,

        // 获取选中项
        idListForSelected () {
            let nodes = this.ins.tree.getCheckedNodes();
            let idList = [];
            for (let i = 0; i < nodes.length; ++i)
            {
                let cur = nodes[i];
                idList.push(cur.id);
            }
            return idList;
        } ,

        submit () {
            if (this.pending.submit) {
               Prompt.alert('请求中...请耐心等待');
               return ;
            }
            const self = this;
            this.pending.submit = true;
            this.ins.loading.show();
            this.ins.loading.listen('close' , () => {
                this.pending.submit = false;
            });
            let idList = this.idListForSelected();
                idList = G.jsonEncode(idList);
            Api.role.allocate({
                id: this.param.id ,
                route_id_list: idList
            } , (res) => {
                Prompt.alert('操作成功' , {
                    btn: [
                        {
                            name: '角色列表' ,
                            callback () {
                                this.hide();
                                self.location('/role/list');
                            } ,
                        } ,
                        {
                            name: '继续分配' ,
                            callback () {
                                this.hide();
                            }  ,
                        }
                    ] ,
                });
            } , null , () => {
                this.pending.submit = false;
                this.ins.loading.hide();
                this.ins.loading.listen('close' , null);
            });
        } ,
    } ,
}