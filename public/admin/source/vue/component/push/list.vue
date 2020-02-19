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
                                <div class="field">群推类型：</div>
                                <div class="value">
                                    <i-select v-model="form.push_type" style="width: 200px;">
                                        <i-option v-for="(v,k) in business.push_type_for_user" :key="k" :value="k">{{ v }}</i-option>
                                    </i-select>
                                </div>
                            </div>
                            <div class="option">
                                <div class="field">推送群体：</div>
                                <div class="value">
                                    <i-select v-model="form.role" style="width: 200px;">
                                        <i-option v-for="(v,k) in business.role_for_push"  :key="k" :value="k">{{ v }}</i-option>
                                    </i-select>
                                </div>
                            </div>
                            <div class="option">
                                <div class="field">推送类型：</div>
                                <div class="value">
                                    <i-select v-model="form.type" style="width: 200px;">
                                        <i-option v-for="(v,k) in business.push_type_for_push" :key="k" :value="k">{{ v }}</i-option>
                                    </i-select>
                                </div>
                            </div>
                            <div class="option">
                                <div class="field"></div>
                                <div class="value">
                                    <v-button type="submit" color="blue">提交</v-button>
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
                                <v-button color="orange" @click="del(idList)">删除</v-button>
                                <v-button color="blue" @click="location('/push/add' , {mode: 'add'} , '_blank')">添加</v-button>
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
                                    <v-order asc="id|asc" desc="id|desc" @on-change="order"></v-order>
                                </th>
                                <th class="w-80">群推类型</th>
                                <th class="w-80">推送群体</th>
                                <th class="w-80">目标用户</th>
                                <th class="w-80">推送类型</th>
                                <th class="w-150">推送标题</th>
                                <th class="w-200">推送内容</th>
                                <th class="w-100">
                                    创建时间
                                    <v-order asc="create_time|asc" desc="create_time|desc" @on-change="order"></v-order>
                                </th>
                                <th class="w-150">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="(v,k) in listData" :key="v.id" @click="selectEvent(v.id)">
                                <td>
                                    <i-checkbox-group v-model="idList">
                                        <i-checkbox :label="v.id"></i-checkbox>
                                    </i-checkbox-group>
                                </td>
                                <td>{{ v.id }}</td>
                                <td>{{ v.push_type_explain }}</td>
                                <td>{{ v.role_explain }}</td>
                                <td>{{ v.user_id }}</td>
                                <td>{{ v.type_explain }}</td>
                                <td>{{ v.title }}</td>
                                <td>{{ v.content }}</td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <v-button color="blue" @click="location('/push/edit' , {id: v.id , mode: 'edit'})">编辑</v-button>
                                    <v-button color="orange" @click="del([v.id])">删除</v-button>
                                    <v-button color="yellow" @click="push(v.id)">推送</v-button>
                                </td>
                            </tr>
                            <tr v-if="listData.length == 0">
                                <td colspan="10">没有相关数据</td>
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