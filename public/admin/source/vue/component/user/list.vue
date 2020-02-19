<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <div class="top">
                    <!-- 数据筛选 -->
                    <form @submit.prevent="submit">
                        <div class="run-title">
                            <div class="left">筛选</div>
                            <div class="right"></div>
                        </div>
                        <div class="filter-options">
                            <div class="option">
                                <div class="field">ID：</div>
                                <div class="value"><input type="text" v-model="form.id" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field">标识符：</div>
                                <div class="value"><input type="text" v-model="form.identifier" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field">用户名：</div>
                                <div class="value"><input type="text" v-model="form.username" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field">昵称：</div>
                                <div class="value"><input type="text" v-model="form.nickname" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field">手机号码：</div>
                                <div class="value"><input type="text" v-model="form.phone" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field">角色：</div>
                                <div class="value">
                                    <i-select v-model="form.role" style="width: 200px;">
                                        <i-option :value="''">请选择...</i-option>
                                        <i-option v-for="(v,k) in business.role" :key="k" :value="k">{{ v }}</i-option>
                                    </i-select>
                                </div>
                            </div>
                            <div class="option">
                                <div class="field"></div>
                                <div class="value">
                                    <button type="submit" class="run-button run-button-blue">提交</button>
                                    <button type="reset" class="run-button run-button-yellow">
                                        <i class="run-iconfont run-reset"></i>
                                        重置
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!--数据列表-->
                <div class="btm list">
                    <div class="data">
                        <div class="run-title">
                            <div class="left">数据列表</div>
                            <div class="right">
                                <!--<button type="button" class="run-button run-button-orange" @click.stop="del(idList)">删除选中项 <i class="run-iconfont run-iconfont-delete"></i></button>-->
                                <!--<button type="button" class="run-button run-button-blue" @click="location('/user/add' , {mode: 'add'} , '_blank')">新增 <i class="run-iconfont run-iconfont-add"></i></button>-->
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="th-checkbox">
                                    <i-checkbox @on-change="selectAllEvent"></i-checkbox>
                                </th>
                                <th class="w-80">
                                    ID
                                    <span class="arrow">
                                        <i class="run-iconfont run-arrow top" :class="form.order == 'id|asc' ? 'focus' : ''" data-order="id|asc" @click="order"></i>
                                        <i class="run-iconfont run-arrow btm" :class="form.order == 'id|desc' ? 'focus' : ''" data-order="id|desc" @click="order"></i>
                                    </span>
                                </th>
                                <th class="w-130">用户</th>
                                <th class="w-130">状态</th>
                                <th class="w-130">用户添加好友选项</th>
                                <th class="w-130">用户选项</th>
                                <th class="w-100">
                                    创建时间
                                    <span class="arrow">
                                        <i class="run-iconfont run-arrow top" :class="form.order == 'create_time|asc' ? 'focus' : ''" data-order="create_time|asc" @click="order"></i>
                                        <i class="run-iconfont run-arrow btm" :class="form.order == 'create_time|desc' ? 'focus' : ''" data-order="create_time|desc" @click="order"></i>
                                    </span>
                                </th>
                                <th class="w-100">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="(v,k) in listData" :key="v.id" @click="selectEvent(v.id)">
                                <td>
                                    <i-checkbox-group v-model="idList">
                                        <i-checkbox :label="v.id"></i-checkbox>
                                    </i-checkbox-group>
                                </td>
                                <td class="multiple-rows">
                                    <div class="row">【ID】<span class="weight">{{ v.id }}</span></div>
                                    <div class="row"><img :src="v.avatar_explain" class="image"></div>
                                </td>
                                <td class="multiple-rows">
                                    <div class="row">【标识符】<span class="weight" :title="v.identifier">{{ v.identifier }}</span></div>
                                    <div class="row">【用户名】<span class="weight" :title="v.name">{{ v.username }}</span></div>
                                    <div class="row">【昵称】<span class="weight" :title="v.nickname">{{ v.nickname }}</span></div>
                                    <div class="row">【角色】<span class="weight" :title="v.role_explain">{{ v.role_explain }}</span></div>
                                    <div class="row">【区号】<span class="weight" :title="v.area_code">{{ v.area_code }}</span></div>
                                    <div class="row">【手机号码】<span class="weight" :title="v.phone">{{ v.phone }}</span></div>
                                </td>
                                <td class="multiple-rows">
                                    <div class="row">【系统用户？】<span class="weight" :class="v.is_system ? 'red' : ''">{{ v.is_system_explain }}</span></div>
                                    <div class="row">【临时用户？】<span class="weight" :class="v.is_temp ? 'red' : ''">{{ v.is_temp_explain }}</span></div>
                                </td>
                                <td class="multiple-rows">
                                    <div class="row" v-for="v1 in v.user_join_friend_option"  @click.stop>
                                        <div class="field fix-field">【{{ v1.join_friend_method.name }}】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id, join_friend_method_id: v1.join_friend_method_id}" v-model="v1.enable" @on-change="singleEditUserJoinFriendOption"></v-switch></div>
                                    </div>
                                </td>
                                <td class="multiple-rows">
                                    <div class="row" @click.stop>【私聊通知】<v-switch size="small" :extra="{id: v.id,field: 'private_notification'}" v-model="v.user_option.private_notification" @on-change="singleEditUserOption"></v-switch></div>
                                    <div class="row" @click.stop>【群聊通知】<v-switch size="small" :extra="{id: v.id,field: 'group_notification'}" v-model="v.user_option.group_notification" @on-change="singleEditUserOption"></v-switch></div>
                                    <div class="row" @click.stop>【输入状态】<v-switch size="small" :extra="{id: v.id,field: 'write_status'}" v-model="v.user_option.write_status" @on-change="singleEditUserOption"></v-switch></div>
                                    <div class="row" @click.stop>【好友验证】<v-switch size="small" :extra="{id: v.id,field: 'friend_auth'}" v-model="v.user_option.friend_auth" @on-change="singleEditUserOption"></v-switch></div>
                                    <div class="row" @click.stop>【全局禁言】<v-switch size="small" :extra="{id: v.id,field: 'banned'}" v-model="v.user_option.banned" @on-change="singleEditUserOption"></v-switch></div>
                                    <div class="row" @click.stop>
                                        【自动清理私聊消息】
                                        <i-tooltip content="点击修改值" placement="top">
                                            <span @click.stop="editClearTimer(v.id , 'private')" class="weight" :class="v.user_option ? (v.user_option.clear_timer_for_private == 'none' ? 'green' : '') : ''">{{ v.user_option ? v.user_option.clear_timer_for_private_explain : '待查' }}</span>
                                        </i-tooltip>
                                    </div>
                                    <div class="row" @click.stop>
                                        【自动清理群聊消息】
                                        <i-tooltip placement="bottom" content="点击可修改值">
                                            <span @click.stop="editClearTimer(v.id , 'group')" class="weight" :class="v.user_option ? (v.user_option.clear_timer_for_group == 'none' ? 'green' : '') : ''">{{ v.user_option ? v.user_option.clear_timer_for_group_explain : '待查' }}</span>
                                        </i-tooltip>
                                    </div>
                                </td>
                                <td>{{ v.create_time }}</td>
                                <td class="multiple-rows">
                                    <div class="row"><button type="button" class="run-button run-button-yellow" @click.stop="location('/user/edit' , {id: v.id , mode: 'edit'} , '_blank')">编辑 <i class="run-iconfont run-iconfont-edit"></i></button></div>
                                    <div class="row"><button type="button" class="run-button run-button-yellow" @click.stop="location('/userActivityLog/list' , {user_id: v.id} , '_blank')">活跃状态 <i class="run-iconfont run-iconfont-edit"></i></button></div>
                                </td>
                            </tr>
                            <tr v-if="listData.length == 0">
                                <td colspan="8">没有相关数据</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="page">
                        <i-page :total="page.total" :current="form.page" :page-size="form.limit" size="small" show-total show-elevator @on-change="pageEvent" />
                    </div>
                </div>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/list.js"></script>
<style src="../public/css/global.css"></style>
<style src="../public/css/public.css"></style>
<style src="../public/css/list.css"></style>
<style scoped src="./css/list.css"></style>