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
                                <div class="field">名称：</div>
                                <div class="value"><input type="text" v-model="form.name" class="form-text"></div>
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
                            <div class="right"></div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <!--<th class="th-checkbox">-->
                                    <!--<i-checkbox @on-change="selectAllEvent"></i-checkbox>-->
                                <!--</th>-->
                                <th class="th-id">ID <v-order v-model="form.order" asc="id|asc" desc="id|desc" @on-change="order"></v-order></th>
                                <th class="w-180">名称</th>
                                <th class="w-150">简介</th>
                                <th class="w-150">公告</th>
                                <th class="th-status">状态</th>
                                <th class="th-time">创建时间 <v-order v-model="form.order" asc="create_time|asc" desc="create_time|desc" @on-change="order"></v-order></th>
                                <th class="th-opr">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="(v,k) in listData" :key="v.id" @click="selectEvent(v.id)">
                                <!--<td>-->
                                    <!--<i-checkbox-group v-model="idList">-->
                                        <!--<i-checkbox :label="v.id"></i-checkbox>-->
                                    <!--</i-checkbox-group>-->
                                <!--</td>-->
                                <td>{{ v.id }}</td>
                                <td class="multiple-rows">
                                    <div class="row">【群名称】{{ v.name }}</div>
                                    <div class="row">【群类型】{{ v.type_explain }}</div>
                                    <div class="row" v-if="v.type == 2">【过期时间】<span :title="v.expire">{{ v.expire }}</span></div>
                                </td>
                                <td>{{ v.introduction }}</td>
                                <td>{{ v.announcement }}</td>
                                <td class="multiple-rows">
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【临时群】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'is_temp'}" v-model="v.is_temp" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【客服群】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'is_service'}" v-model="v.is_service" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【匿名】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'anonymous'}" v-model="v.anonymous" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【全局禁言】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'banned'}" v-model="v.banned" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【进群认证】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'auth'}" v-model="v.auth" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                </td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <v-button color="blue" @click="location('/group_member/list' , {group_id: v.id} , '_blank')">群成员</v-button>
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