export default {
    name: 'login' ,

    data () {
        return {
            form: {
                username: '' ,
                password: '' ,
                verify_code: '' ,
                verify_code_key: '' ,
            } ,
            error: {} ,
            verifyCode: '' ,
            pending: {
                submit: false ,
            } ,
        };
    } ,

    mounted () {
        this.getVerifyCode();
    } ,

    methods: {

        check () {
            // this.error = G.v.check(this.form , {
            //     username: 'required' ,
            //     password: 'required' ,
            //     verify_code: 'required' ,
            // } , {
            //     username: '请填写用户名' ,
            //     password: '请填写密码' ,
            //     verify_code: '请填写验证码' ,
            // });
            // if (G.v.hasError(this.error)) {
            //     let firstKey = G.v.firstKey(this.error);
            //     this.vScroll(firstKey);
            //     return false;
            // }
            return true;
        } ,

        submit () {
            if (this.pending.submit) {
                Prompt.alert('请求中...请耐心等待');
                return ;
            }
            if (!this.check()) {
                return ;
            }
            this.pending.submit = true;
            topContext.ins.loading.listen('close' , () => {
                this.pending.submit = false;
            });
            topContext.ins.loading.show();
            Api.login.login(this.form , (res) => {
                this.error = {};
                // 设置已经登录的标志
                G.s.set('token' , res);
                this.$router.push({name: 'index'});
            } , (data , code) => {
                this.error = {};
                if (code != -400) {
                    this.gAlert(data);
                    return ;
                }
                this.error = data;
                this.vScroll(G.v.firstKey(this.error));
                this.getVerifyCode();
            } , () => {
                this.pending.submit = false;
                topContext.ins.loading.hide();
                topContext.ins.loading.listen('close' , null);
            });
        } ,

        getVerifyCode () {
            // 获取图形验证码
            Api.login.verifyCode((res) => {
                this.verifyCode = res.img;
                this.form.verify_code_key = res.key;
            });
        } ,
    } ,
};