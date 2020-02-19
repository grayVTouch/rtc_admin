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
                                <th class="th-name">用户名【ID】</th>
                                <th class="th-name">群名称【ID】</th>
                                <th class="th-name">群昵称</th>
                                <th class="th-status">状态</th>
                                <th class="th-time">创建时间 <v-order v-model="form.order" asc="create_time|asc" desc="create_time|desc" @on-change="order"></v-order></th>
                                <th class="th-opr hide">操作</th>
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
                                <td>{{ `${v.user ? v.user.nickname : ''}【${v.user_id}】` }}</td>
                                <td>{{ `${v.group ? v.group.name : ''}【${v.group_id}】` }}</td>
                                <td>{{ v.alias }}</td>
                                <td class="multiple-rows">
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【允许打扰】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'can_notice'}" v-model="v.can_notice" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【禁言】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'banned'}" v-model="v.banned" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                    <div class="row" @click.stop>
                                        <div class="field fix-field">【置顶】</div>
                                        <div class="value"><v-switch size="small" :extra="{id: v.id , field: 'top'}" v-model="v.top" @on-change="singleEdit"></v-switch></div>
                                    </div>
                                </td>
                                <td>{{ v.create_time }}</td>
                                <td class="hide">
                                    <v-button color="blue" @click="location('/group/member' , {id: v.id} , '_blank')">群成员</v-button>
                                </td>
                            </tr>
                            <tr v-if="listData.length == 0">
                                <td colspan="7">没有相关数据</td>
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