<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <div class="top hide"></div>
                <!--数据列表-->
                <div class="btm list">
                    <div class="data">
                        <div class="run-title">
                            <div class="left">数据列表</div>
                            <div class="right">
                                <button type="button" class="run-button run-button-orange" @click.stop="del(idList)">删除选中项 <i class="run-iconfont run-iconfont-delete"></i></button>
                                <button type="button" class="run-button run-button-blue" @click="location('/route/add' , {mode: 'add'} , '_blank')">新增 <i class="run-iconfont run-iconfont-add"></i></button>
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="th-checkbox">
                                    <i-checkbox @on-change="selectAllEvent"></i-checkbox>
                                </th>
                                <th class="th-id">ID</th>
                                <th class="w-130">名称</th>
                                <th class="w-80">路由</th>
                                <th class="w-30">方法</th>
                                <th class="w-30">类型</th>
                                <th class="w-20">启用?</th>
                                <th class="w-20">隐藏?</th>
                                <th class="w-20">菜单?</th>
                                <th class="w-30">权重</th>
                                <th class="w-90">创建时间</th>
                                <th class="w-120">操作</th>
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
                                <td class="text-left">{{ v.floor > 1 ? '|' + '_'.repeat((v.floor - 1) * 4) : '' }}{{ v.cn }}</td>
                                <td>{{ v.route }}</td>
                                <td>{{ v.method }}</td>
                                <td>{{ v.type }}</td>
                                <td><v-switch size="small" :extra="{id: v.id , field: 'enable'}" v-model="v.enable" @on-change="singleEdit"></v-switch></td>
                                <td><v-switch size="small" :extra="{id: v.id , field: 'hidden'}" v-model="v.hidden" @on-change="singleEdit"></v-switch></td>
                                <td><v-switch size="small" :extra="{id: v.id , field: 'menu'}" v-model="v.menu" @on-change="singleEdit"></v-switch></td>
                                <td>{{ v.weight }}</td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <button type="button" class="run-button run-button-blue" @click.stop="location('/route/edit' , {id: v.id , mode: 'edit'})">编辑 <i class="run-iconfont run-iconfont-edit"></i></button>
                                    <button type="button" class="run-button run-button-orange" @click.stop="del([v.id])">删除 <i class="run-iconfont run-iconfont-delete"></i></button>

                                </td>
                            </tr>
                            <tr v-if="listData.length == 0">
                                <td colspan="12">没有相关数据</td>
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
<style src="../public/css/global.css"></style>
<style src="../public/css/public.css"></style>
<style src="../public/css/list.css"></style>
<style scoped src="./css/list.css"></style>