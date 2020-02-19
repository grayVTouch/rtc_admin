const list = `${topContext.admin}/userActivityLog/list`;

export default {
    list (data , success , error , callback , before) {
        return post(list , data , success , error , callback , before);
    } ,
};