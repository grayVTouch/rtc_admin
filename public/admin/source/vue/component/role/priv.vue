<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <form @submit.prevent="submit">
                    <div class="run-title">
                        <div class="left">权限列表</div>
                        <div class="right"></div>
                    </div>
                    <div class="c-content">
                        <table class="input-tb">
                            <tbody>
                            <tr>
                                <td>
                                    <i-tree ref="tree" :data="routes" show-checkbox multiple check-strictly check-directly></i-tree>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button class="run-button run-button-submit">提交</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/priv.js"></script>

<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/list.css"></style>
<style scoped src="./css/priv.css"></style>