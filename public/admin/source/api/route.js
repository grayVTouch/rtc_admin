const all = `${topContext.admin}/route/all`;
const detail = `${topContext.admin}/route/detail`;
const edit = `${topContext.admin}/route/edit`;
const add = `${topContext.admin}/route/add`;
const del = `${topContext.admin}/route/del`;
const singleEdit = `${topContext.admin}/route/singleEdit`;

export default {
    all (success , error , callback , before) {
        return post(all , null , success , error , callback , before);
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

    singleEdit (data , success , error , callback , before) {
        return post(singleEdit , data , success , error , callback , before);
    } ,
};