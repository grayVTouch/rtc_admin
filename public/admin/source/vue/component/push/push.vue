<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="push_type" :class="getClass(error.push_type)">
                            <td>群推类型</td>
                            <td>
                                <i-radio-group v-model="form.push_type">
                                    <i-radio v-for="(v,k) in business.push_type_for_user" :key="k" :label="k">{{ v }}</i-radio>
                                </i-radio-group>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.push_type }}</span>
                            </td>
                        </tr>

                        <tr id="role" :class="getClass(error.role)">
                            <td>推送群体</td>
                            <td>
                                <i-radio-group v-model="form.role">
                                    <i-radio v-for="(v,k) in business.role_for_push" :key="k" :label="k">{{ v }}</i-radio>
                                </i-radio-group>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.role }}</span>
                            </td>
                        </tr>

                        <tr id="user_id" :class="getClass(error.user_id)">
                            <td>目标用户</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.user_id">
                                <span class="necessary"></span>
                                <span class="tip">仅在 推送群体 = 指定用户推送的时候需要填写；请填写要推送的用户id，如果有多个，请用逗号隔开。</span>
                                <span class="msg">{{ error.user_id }}</span>
                            </td>
                        </tr>

                        <tr id="type" :class="getClass(error.type)">
                            <td>推送类型</td>
                            <td>
                                <i-radio-group v-model="form.type">
                                    <i-radio v-for="(v,k) in business.push_type_for_push" :key="k" :label="k">{{ v }}</i-radio>
                                </i-radio-group>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.type }}</span>
                            </td>
                        </tr>

                        <tr id="title" :class="getClass(error.title)">
                            <td>推送标题</td>
                            <td>
                                <textarea class="form-textarea" v-model="form.title"></textarea>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.title }}</span>
                            </td>
                        </tr>
                        <tr id="desc" :class="getClass(error.desc)">
                            <td>推送描述</td>
                            <td>
                                <textarea class="form-textarea" v-model="form.desc"></textarea>
                                <span class="necessary"></span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.desc }}</span>
                            </td>
                        </tr>
                        <tr id="content" :class="getClass(error.content)">
                            <td>推送内容</td>
                            <td>
                                <textarea class="form-textarea" v-model="form.content"></textarea>
                                <span class="necessary"></span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.content }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit" class="run-button run-button-submit">提交</button>
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

<script src="./js/push.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/push.css"></style>