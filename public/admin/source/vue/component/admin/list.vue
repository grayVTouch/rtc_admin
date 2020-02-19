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
                                <div class="field">用户名：</div>
                                <div class="value"><input type="text" v-model="form.username" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field">手机号码：</div>
                                <div class="value"><input type="text" v-model="form.phone" class="form-text"></div>
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
                                <button type="button" class="run-button run-button-blue" @click="location('/admin/add' , {mode: 'add'} , '_blank')">新增 <i class="run-iconfont run-iconfont-add"></i></button>
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="th-checkbox">
                                    <i-checkbox @on-change="selectAllEvent"></i-checkbox>
                                </th>
                                <th class="th-id">
                                    ID
                                    <span class="arrow">
                                        <i class="run-iconfont run-arrow top" :class="form.order == 'id|asc' ? 'focus' : ''" data-order="id|asc" @click="order"></i>
                                        <i class="run-iconfont run-arrow btm" :class="form.order == 'id|desc' ? 'focus' : ''" data-order="id|desc" @click="order"></i>
                                    </span>
                                </th>
                                <th class="w-100">用户名</th>
                                <th class="w-100">角色</th>
                                <th class="w-100">联系方式</th>
                                <th class="w-100">root用户？</th>
                                <th class="w-100">记录</th>
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
                                <td>{{ v.username }}</td>
                                <td>{{ v.role ? v.role.name : '' }}</td>
                                <td>{{ v.phone }}</td>
                                <td>{{ v.is_root_explain }}</td>
                                <td class="multiple-rows">
                                    <div class="row">【最近登录IP】{{ v.last_ip }}</div>
                                    <div class="row">【最近登录时间】{{ v.last_time }}</div>
                                </td>
                                <td>{{ v.create_time }}</td>
                                <td class="multiple-rows">
                                    <div class="row"><button type="button" class="run-button run-button-yellow" @click.stop="location('/admin/edit' , {id: v.id , mode: 'edit'})">编辑 <i class="run-iconfont run-iconfont-edit"></i></button></div>
                                </td>
                            </tr>
                            <tr v-if="listData.length == 0">
                                <td colspan="9">没有相关数据</td>
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