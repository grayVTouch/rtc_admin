const list = `${topContext.admin}/user/list`;
const info = `${topContext.admin}/user/info`;
const edit = `${topContext.admin}/user/edit`;
const singleEditUserOption = `${topContext.admin}/user/singleEditUserOption`;
const singleEditUserJoinFriendOption = `${topContext.admin}/user/singleEditUserJoinFriendOption`;

export default {
    list (data , success , error , callback , before) {
        return post(list , data , success , error , callback , before);
    } ,

    info (id , success , error , callback , before) {
        return post(info , {id} , success , error , callback , before);
    } ,

    edit (data , success , error , callback , before) {
        return post(edit , data , success , error , callback , before);
    } ,

    singleEditUserOption (data , success , error , callback , before) {
        return post(singleEditUserOption , data , success , error , callback , before);
    } ,

    singleEditUserJoinFriendOption (data , success , error , callback , before) {
        return post(singleEditUserJoinFriendOption , data , success , error , callback , before);
    } ,
};