const info = `${topContext.admin}/admin/info`;
const list = `${topContext.admin}/admin/list`;
const detail = `${topContext.admin}/admin/detail`;
const edit = `${topContext.admin}/admin/edit`;
const add = `${topContext.admin}/admin/add`;
const del = `${topContext.admin}/admin/del`;

export default {
    info (success , error , callback , before) {
        return post(info , null , success , error , callback , before);
    } ,

    list (data , success , error , callback , before) {
        return post(list , data , success , error , callback , before);
    } ,

    detail (id , success , error , callback , before) {
        return post(detail , {id} , success , error , callback , before);
    } ,

    edit (data , success , error , callback , before) {
        return post(edit , data , success , error , callback , before);
    } ,

    add (data , success , error , callback , before) {
        return post(add , data , success , error , callback , before);
    } ,

    del (idList , success , error , callback , before) {
        return post(del , {
            id_list: G.jsonEncode(idList)
        } , success , error , callback , before);
    } ,
};