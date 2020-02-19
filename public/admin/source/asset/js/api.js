/**
 * ***********************
 * api 设置
 * ***********************
 */
import login from '../../api/login.js';
import admin from '../../api/admin.js';
import role from '../../api/role.js';
import user from '../../api/user.js';
import project from '../../api/project.js';
import route from '../../api/route.js';
import article_type from '../../api/article_type.js';
import article from '../../api/article.js';
import group from '../../api/group.js';
import group_member from '../../api/group_member.js';
import push from '../../api/push.js';
import pannel from '../../api/pannel.js';
import userActivityLog from '../../api/userActivityLog.js';

const Api = {
    login ,
    admin ,
    role ,
    user ,
    project ,
    route ,
    article_type ,
    article ,
    group ,
    group_member ,
    push ,
    pannel ,
    userActivityLog ,
};
window.Api = Api;