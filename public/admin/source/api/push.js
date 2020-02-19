const list = `${topContext.admin}/push/list`;
const detail = `${topContext.admin}/push/detail`;
const edit = `${topContext.admin}/push/edit`;
const add = `${topContext.admin}/push/add`;
const del = `${topContext.admin}/push/del`;
const singleEdit = `${topContext.admin}/push/singleEdit`;
const push = `${topContext.admin}/push/push`;

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

    push (id , success , error , callback , before) {
        return post(push , {id} , success , error , callback , before);
    } ,

};
