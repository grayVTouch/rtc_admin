const upload = `${topContext.admin}/file/upload`;

export default {
    upload (data , success , error , callback , before) {
        return post(upload , data , success , error , callback , before);
    } ,
};