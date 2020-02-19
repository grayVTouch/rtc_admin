const list = `${topContext.admin}/role/list`;
const detail = `${topContext.admin}/role/detail`;
const edit = `${topContext.admin}/role/edit`;
const add = `${topContext.admin}/role/add`;
const del = `${topContext.admin}/role/del`;
const priv = `${topContext.admin}/role/priv`;
const allocate = `${topContext.admin}/role/allocate`;
const all = `${topContext.admin}/role/all`;

export default {
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

    priv (id , success , error , callback , before) {
        return post(priv , {id} , success , error , callback , before);
    } ,

    allocate (data , success , error , callback , before) {
        return post(allocate , data , success , error , callback , before);
    } ,

    all (success , error , callback , before) {
        return post(all , null , success , error , callback , before);
    } ,


};
