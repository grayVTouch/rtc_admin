drop table if exists `rtc_admin`;
create table if not exists `rtc_admin` (
    id int unsigned not null auto_increment ,
    username varchar(255) default '' comment '用户名' ,
    password varchar(255) default '' comment '密码' ,
    phone varchar(255) default '' comment '手机' ,
    avatar varchar(500) default '' comment '头像' ,
    role_id int unsigned default 0 comment '角色：rtc_role.id' ,
    last_time datetime default current_timestamp comment '最后一次登录时间' ,
    last_ip varchar(255) default '' comment '最近一次登录ip' ,
    is_root tinyint default 0 comment '超级管理员：0-否 1-是' ,
    id_for_rtc varchar(1000) default '' comment 'rtc 项目的标识符' ,
    update_time datetime default current_timestamp on update current_timestamp comment '更新时间' ,
    create_time datetime default current_timestamp comment '创建时间' ,
    primary key `id` (`id`)
) engine=innodb character set = utf8mb4 collate=utf8mb4_bin comment '用户表';

drop table if exists `rtc_admin_land_log`;
create table if not exists `rtc_admin_land_log` (
    id int unsigned not null auto_increment ,
    user_id int unsigned default 0 comment 'rtc_admin_user.id' ,
    last_ip varchar(255) default '' comment '最近一次登录ip' ,
    create_time datetime default current_timestamp comment '最近一次登录时间' ,
    primary key `id` (`id`)
) engine=innodb character set = utf8mb4 collate = utf8mb4_bin comment '后台用户登录日志';

drop table if exists `rtc_admin_operation_log`;
create table if not exists `rtc_admin_operation_log` (
    id int unsigned not null auto_increment ,
    user_id int unsigned default 0 comment 'rtc_admin_user.id' ,
    operation varchar(500) comment '执行的操作' ,
    `desc` varchar(500) comment '操作描述' ,
    last_ip varchar(500) comment '最近一次登录ip' ,
    create_time datetime default current_timestamp comment '最近一次登录时间' ,
    primary key `id` (`id`)
) engine=innodb character set = utf8mb4 collate = utf8mb4_bin comment '后台用户操作日志';

drop table if exists `rtc_admin_token`;
create table if not exists `rtc_admin_token` (
    id int unsigned not null auto_increment ,
    token varchar(255) default '' ,
    user_id int unsigned default 0 comment 'rtc_admin_user.id' ,
    expire datetime default current_timestamp comment 'token 过期时间' ,
    create_time datetime default current_timestamp ,
    primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 password 模式';

drop table if exists `rtc_role`;
create table if not exists `rtc_role` (
  id int unsigned not null auto_increment ,
  name varchar(255) default '' comment '角色名称' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '角色表';

drop table if exists `rtc_route`;
create table if not exists `rtc_route` (
  id int unsigned not null auto_increment ,
  cn varchar(255) comment '中文名称' ,
  en varchar(255) default '' comment '英文名称' ,
  route varchar(255) comment '路由' ,
  s_ico varchar(500) default '' comment '小图标' ,
  b_ico varchar(500) default '' comment '大图标' ,
  method enum('GET' , 'POST' , 'PUT' , 'PATCH' , 'DELETE' , 'NONE') default 'NONE' comment '请求方法，如果 type = view，请设置为 NONE' ,
  `type` enum('api' , 'view') default 'api' comment '类型，由于采用前后端分离开发，所以前端也有自己的路由！' ,
  hidden tinyint default 0 comment '是否隐藏 1-是 0-否' ,
  enable tinyint default 1 comment '是否启用 1-是；0-否' ,
  menu tinyint default 1 comment '是否菜单 1-是；0-否' ,
  p_id int unsigned default 0 comment '上级id，rtc_route.id' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp comment '创建时间' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '路由表';

drop table if exists `rtc_role_route`;
create table if not exists `rtc_role_route` (
  id int unsigned not null auto_increment ,
  role_id int unsigned default 0 comment 'rtc_role.id' ,
  route_id int unsigned default 0 comment 'rtc_route.id' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '角色权限表';

