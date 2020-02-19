const list = `${topContext.admin}/group_member/list`;
const singleEdit = `${topContext.admin}/group_member/singleEdit`;

export default {
    list (data , success , error , callback , before) {
        return post(list , data , success , error , callback , before);
    } ,

    singleEdit (data , success , error , callback , before) {
        return post(singleEdit , data , success , error , callback , before);
    } ,


};
