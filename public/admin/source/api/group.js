const list = `${topContext.admin}/group/list`;
const detail = `${topContext.admin}/group/detail`;
const edit = `${topContext.admin}/group/edit`;
const add = `${topContext.admin}/group/add`;
const del = `${topContext.admin}/group/del`;
const singleEdit = `${topContext.admin}/group/singleEdit`;

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

    singleEdit (data , success , error , callback , before) {
        return post(singleEdit , data , success , error , callback , before);
    } ,


};
