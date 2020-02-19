<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <div class="top"></div>
                <!--数据列表-->
                <div class="btm list">
                    <div class="data">
                        <div class="run-title">
                            <div class="left">数据列表</div>
                            <div class="right">
                                <v-button color="orange" :has="true" ico="del" @click="del(idList)">删除选中项</v-button>
                                <v-button color="blue" :has="true" ico="add" @click="location('/article_type/add' , {mode: 'add'} , '_blank')">添加</v-button>
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="th-checkbox">
                                    <i-checkbox @on-change="selectAllEvent"></i-checkbox>
                                </th>
                                <th class="th-id">ID</th>
                                <th class="th-name">名称</th>
                                <th class="th-status">启用？</th>
                                <th class="th-time">时间</th>
                                <th class="th-opr">操作</th>
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
                                <td class="text-left">{{ v.floor > 1 ? '|' + '_'.repeat((v.floor - 1 ) * 4) : '' }}{{ v.name }}</td>
                                <td @click.stop><v-switch size="small" :extra="{id: v.id , field: 'enable'}" v-model="v.enable" @on-change="singleEdit"></v-switch></td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <v-button color="blue" :has="true" ico="edit" @click="location('/article_type/edit' , {id: v.id , mode: 'edit'})">编辑</v-button>
                                    <v-button color="orange" :has="true" ico="del" @click="del([v.id])">删除</v-button>
                                </td>
                            </tr>
                            <tr v-if="listData.length == 0">
                                <td colspan="6">没有相关数据</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="page"></div>
                </div>
            </div>
        </div>

        <v-loading ref="loading"></v-loading>

    </div>
</template>

<script src="./js/list.js"></script>
<style src="../public/css/public.css"></style>
<style src="../public/css/list.css"></style>
<style src="./css/list.css"></style>
