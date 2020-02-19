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
                                <v-button color="orange" :has="true" ico="delete" @click="del(idList)">删除选中项</v-button>
                                <v-button color="blue" :has="true" ico="add" @click="location('/article/add' , {mode: 'add'} , '_blank')">添加</v-button>
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="th-checkbox">
                                    <i-radio @on-change="selectAllEvent"></i-radio>
                                </th>
                                <th class="th-id">ID</th>
                                <th class="w-100">标题</th>
                                <th class="w-100">封面</th>
                                <th class="w-100">分类【ID】</th>
                                <th class="w-100">作者</th>
                                <th class="w-100">权重</th>
                                <th class="w-60">启用？</th>
                                <th class="w-180">时间</th>
                                <th class="w-130">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="v in listData" :key="v.id" @click="selectEvent(v.id)">
                                <td>
                                    <i-checkbox-group v-model="idList">
                                        <i-checkbox :label="v.id"></i-checkbox>
                                    </i-checkbox-group>
                                </td>
                                <td>{{ v.id }}</td>
                                <td>{{ v.title }}</td>
                                <td><img :src="v.thumb_explain" class="image"></td>
                                <td>{{ v.article_type ? `${v.article_type.name}【${v.article_type.id}】` : '' }}</td>
                                <td>{{ v.author }}</td>
                                <td>{{ v.weight }}</td>
                                <td>
                                    <v-switch size="small" :extra="{id: v.id , field: 'enable'}" v-model="v.enable" @on-change="singleEdit"></v-switch>
                                </td>
                                <td class="multiple-rows">
                                    <div class="row">【更新时间】{{ v.update_time }}</div>
                                    <div class="row">【创建时间】{{ v.create_time }}</div>
                                </td>
                                <td>
                                    <v-button color="blue" @click="location('/article/edit' , {id: v.id , mode: 'edit'})" :has="true" ico="edit">编辑</v-button>
                                    <v-button color="orange" :has="true" ico="delete" @click="del([v.id])">删除</v-button>
                                </td>
                            </tr>
                            <tr v-if="listData.length == 0">
                                <td colspan="9">没有相关数据</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="page">
                        <Page :total="page.total" :current="form.page" :page-size="page.per_page" size="small" show-total show-elevator @on-change="pageEvent" />
                    </div>
                </div>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<style src="../public/css/public.css"></style>
<style src="../public/css/list.css"></style>
<style scoped src="./css/list.css"></style>
<script src="./js/list.js"></script>