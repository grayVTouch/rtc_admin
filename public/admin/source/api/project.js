const list = `${topContext.admin}/project/list`;
const detail = `${topContext.admin}/project/detail`;
const edit = `${topContext.admin}/project/edit`;
const add = `${topContext.admin}/project/add`;
const del = `${topContext.admin}/project/del`;

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


};
