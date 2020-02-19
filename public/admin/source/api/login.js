const verifyCode = `${topContext.admin}/login/verifyCode`;
const login = `${topContext.admin}/login/login`;

export default {

    // 验证码
    verifyCode (success , error , callback , before) {
        return post(verifyCode , null , success , error , before);
    } ,

    // 登录
    login (data , success , error , callback , before) {
        return post(login , data , success , error , callback , before);
    } ,
    
};