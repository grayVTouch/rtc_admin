// 异步加载组件
const login = () => import('../component/login/login.vue');
const index = () => import('../component/index/index.vue');
const listForUser = () => import('../component/user/list.vue');

//
// import login from '../component/login/login.vue';
// import index from '../component/index/index.vue';
// import listForUser from '../component/user/list.vue';

const listForAdmin = () => import('../component/admin/list.vue');
const admin = () => import('../component/admin/admin.vue');
const listForRole = () => import('../component/role/list.vue');
const role = () => import('../component/role/role.vue');
const priv = () => import('../component/role/priv.vue');

const user = () => import('../component/user/user.vue');
const listForProject = () => import('../component/project/list.vue');
const project = () => import('../component/project/project.vue');
const listForRoute = () => import('../component/route/list.vue');
const routeView = () => import('../component/route/route.vue');
const listForArticleType = () => import('../component/article_type/list.vue');
const article_type = () => import('../component/article_type/article_type.vue');
const listForArticle = () => import('../component/article/list.vue');
const article = () => import('../component/article/article.vue');
const listForGroup = () => import('../component/group/list.vue');
const group = () => import('../component/group/group.vue');
const listForGroupMember = () => import('../component/group_member/list.vue');
const listForPush = () => import('../component/push/list.vue');
const push = () => import('../component/push/push.vue');
const indexForPannel = () => import('../component/pannel/index.vue');
const listForUserActivityLog = () => import('../component/user_activity_log/list.vue');

const route = [
    {
        name: 'login' ,
        path: '/login' ,
        component: login ,
    } ,
    {
        name: 'index' ,
        path: '/index' ,
        alias: '/' ,
        component: index ,
    } ,
    {
        path: '/admin/list' ,
        component: listForAdmin ,
    } ,
    {
        path: '/admin/edit' ,
        component: admin ,
    } ,
    {
        path: '/admin/add' ,
        component: admin ,
    } ,
    {
        path: '/role/list' ,
        component: listForRole ,
    } ,
    {
        path: '/role/edit' ,
        component: role ,
    } ,
    {
        path: '/role/add' ,
        component: role ,
    } ,
    {
        path: '/role/priv' ,
        component: priv ,
    } ,
    {
        path: '/user/list' ,
        component: listForUser ,
    } ,
    {
        path: '/user/edit' ,
        component: user ,
    } ,
    {
        path: '/project/list' ,
        component: listForProject ,
    } ,
    {
        path: '/project/edit' ,
        component: project ,
    } ,
    {
        path: '/project/add' ,
        component: project ,
    } ,
    {
        path: '/route/list' ,
        component: listForRoute ,
    } ,
    {
        path: '/route/edit' ,
        component: routeView ,
    } ,
    {
        path: '/route/add' ,
        component: routeView ,
    } ,

    {
        path: '/article_type/list' ,
        component: listForArticleType ,
    } ,
    {
        path: '/article_type/add' ,
        component: article_type ,
    } ,
    {
        path: '/article_type/edit' ,
        component: article_type ,
    } ,

    /**
     * 文章
     */
    {
        path: '/article/list' ,
        component: listForArticle ,
    } ,
    {
        path: '/article/add' ,
        component: article ,
    } ,
    {
        path: '/article/edit' ,
        component: article ,
    } ,

    /**
     * 群组
     */
    {
        path: '/group/list' ,
        component: listForGroup ,
    } ,
    {
        path: '/group/add' ,
        component: group ,
    } ,
    {
        path: '/group/edit' ,
        component: group ,
    } ,

    /**
     * 群成员
     */
    {
        path: '/group_member/list' ,
        component: listForGroupMember ,
    } ,

    /**
     * 推送
     */
    {
        path: '/push/list' ,
        component: listForPush ,
    } ,
    {
        path: '/push/add' ,
        component: push ,
    } ,
    {
        path: '/push/edit' ,
        component: push ,
    } ,

    /**
     * 控制面板
     */
    {
        path: '/pannel/index' ,
        component: indexForPannel ,
    } ,

    /**
     * 控制面板
     */
    {
        path: '/userActivityLog/list' ,
        component: listForUserActivityLog ,
    } ,

];

export default route;