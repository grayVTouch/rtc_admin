/**
 * *************************
 * 业务相关字段
 * *************************
 */

window.business = {
    // 布尔-数值
    bool_int: ['否' , '是'] ,
    // 布尔-字符串
    bool_str: {
        'n': '否' ,
        'y': '是'
    } ,

    // 布尔-字符串
    bool_int_one: ['关闭' , '开启'],
    // 请求方法
    route: {
        method: ['GET' , 'POST' , 'PUT' , 'PATCH' , 'DELETE' , 'NONE'] ,
        type: ['view' , 'api'] ,
    } ,
    sex: ['保密' , '男' , '女'] ,
    role: {
        admin: '工作人员' ,
        user: '平台用户' ,
    } ,

    // 定期更新缓存时间
    clear_timer_range: {
        none: '关闭' ,
        day: '每天' ,
        week: '每周' ,
        month: '每月'
    } ,
    // 群推类型
    push_type_for_user: {
        single: '单人推送' ,
        multiple: '多人推送' ,
    } ,
    // 推送群体
    role_for_push: {
        all: '所有人' ,
        admin: '工作人员' ,
        user: '平台用户' ,
        designation: '指定用户' ,
    } ,
    // 推送类型
    push_type_for_push: {
        system: '系统公告' ,
    } ,
};
