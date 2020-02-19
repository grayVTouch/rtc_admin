<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="name" :class="getClass(error.name)">
                            <td>名称</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.name">
                                <span class="necessary">*</span>
                                <span class="tip">{{ error.name }}</span>
                            </td>
                        </tr>
                        <tr id="p_id" :class="getClass(error.p_id)">
                            <td>上级分类</td>
                            <td>
                                <v-select class="form-select" v-model="form.p_id" :data="article_type" :attr="value.mapping"></v-select>
                                <span class="necessary">*</span>
                                <span class="tip">{{ error.p_id }}</span>
                            </td>
                        </tr>
                        <tr id="weight" :class="getClass(error.weight)">
                            <td>权重</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.weight">
                                <span class="necessary">*</span>
                                <span class="tip">{{ error.weight }}</span>
                            </td>
                        </tr>
                        <tr id="hidden" :class="getClass(error.enable)">
                            <td>启用？</td>
                            <td>
                                <i-radio-group v-model="form.enable">
                                    <i-radio v-for="(v,k) in business.bool_int" :label="k" :key="k">
                                        <span>{{ v }}</span>
                                    </i-radio>
                                </i-radio-group>
                                <span class="necessary">*</span>
                                <span class="tip">{{ error.enable }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <v-button type="submit" color="submit">提交</v-button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/article_type.js"></script>
<style src="../public/css/public.css"></style>
<style scoped src="./css/article_type.css"></style>