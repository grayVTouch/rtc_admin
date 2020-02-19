<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <form @submit.prevent="submit">
                    <div class="run-title">
                        <div class="left">用户信息</div>
                        <div class="right"></div>
                    </div>
                    <table class="input-tb">
                        <tbody>
                        <tr id="username" :class="getClass(error.username)">
                            <td>用户名</td>
                            <td>
                                <input type="text" v-model="form.username" class="form-text">
                                <span class="necessary"></span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.username }}</span>
                            </td>
                        </tr>
                        <tr id="nickname" :class="getClass(error.nickname)">
                            <td>昵称</td>
                            <td>
                                <input type="text" v-model="form.nickname" class="form-text">
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.nickname }}</span>
                            </td>
                        </tr>
                        <tr id="password" :class="getClass(error.password)">
                            <td>密码</td>
                            <td>
                                <input type="text" v-model="form.password" class="form-text">
                                <span class="necessary"></span>
                                <span class="tip"><template v-if="param.mode == 'edit'">如果没有提供将使用旧密码</template></span>
                                <span class="msg"></span>
                            </td>
                        </tr>
                        <tr id="role" :class="getClass(error.role)">
                            <td>角色</td>
                            <td>
                                <i-radio-group v-model="form.role">
                                    <i-radio v-for="(v,k) in business.role" :key="k" :label="k">{{ v }}</i-radio>
                                </i-radio-group>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.role }}</span>
                            </td>
                        </tr>
                        <tr id="sex" :class="getClass(error.sex)">
                            <td>性别</td>
                            <td>
                                <i-radio-group v-model="form.sex">
                                    <i-radio v-for="(v,k) in business.sex" :key="k" :label="k">{{ v }}</i-radio>
                                </i-radio-group>
                                <span class="necessary">*</span>
                                <span class="tip">默认：保密</span>
                                <span class="msg">{{ error.sex }}</span>
                            </td>
                        </tr>
                        <tr id="phone" :class="getClass(error.phone)">
                            <td>手机号码</td>
                            <td>
                                区号：<input type="text" v-model="form.area_code" class="form-text">
                                &nbsp;&nbsp;
                                手机号码：<input type="text" v-model="form.phone" class="form-text">
                                <span class="necessary">*</span>
                                <span class="tip">请输入正确的11位手机号码</span>
                                <span class="msg"></span>
                            </td>
                        </tr>
                        <tr id="avatar" :class="getClass(error.avatar)">
                            <td>用户头像</td>
                            <td ref="avatar">
                                <div class='upload-image'>
                                    <div class='select-images'>
                                        <div class="upload-show">
                                            <div class="image-line"><img src="../../../plugin/UploadImage/image/upload_images.png" class="image upload-image-btn" /><span class="selected-count hide">10</span></div>
                                            <div class="text-line">请选择要上传的图片</div>
                                            <div class="clear-selected" title="清空已选择的图片"><img src="../../../plugin/UploadImage/image/clear_selected.png" class="image" /></div>
                                            <input type='file' name='upload_images' class='upload-images-input'>
                                        </div>
                                        <div class="tip">这边是提示内容</div>
                                    </div>
                                    <!-- 预置显示图片 -->
                                    <div class="init-show-image-list">
                                        <img :src="form.avatar_explain" v-if="param.mode == 'edit' && form.avatar_explain" class="init-show-image" />
                                    </div>
                                    <div class='preview-images hide'></div>
                                    <!-- 待上传列表 -->
                                    <div class="upload-image-list hide">
                                        <div class="upload-title">待上传列表</div>
                                        <div class="image-list">
                                            <div class="list-content list-title">
                                                <div class="item div-preview">图片预览</div>
                                                <div class="item div-type">类型</div>
                                                <div class="item div-size">大小</div>
                                                <div class="item div-speed">速度</div>
                                                <div class="item div-status">状态</div>
                                                <div class="item div-opr">操作</div>
                                            </div>
                                            <div class="list-content list-body"></div>
                                        </div>
                                    </div>
                                </div>
                                <span class="tip"></span>
                                <span class="msg">{{ error.avatar }}</span>
                            </td>
                        </tr>
                        <tr id="birthday" :class="getClass(error.birthday)">
                            <td>生日</td>
                            <td>
                                <i-date-picker :value="form.birthday" type="date" placement="bottom-end" placeholder="请选择日期" style="width: 200px"></i-date-picker>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.birthday }}</span>
                            </td>
                        </tr>
                        <tr id="signature" :class="getClass(error.signature)">
                            <td>个性签名</td>
                            <td>
                                <input type="text" v-model="form.signature" class="form-text">
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.signature }}</span>
                            </td>
                        </tr>
                        <tr id="is_system" :class="getClass(error.is_system)">
                            <td>是否系统用户</td>
                            <td>
                                <i-radio-group v-model="form.is_system">
                                    <i-radio v-for="(v,k) in business.bool_int" :key="k" :label="k">{{ v }}</i-radio>
                                </i-radio-group>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.is_system }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><button type="submit" class="run-button run-button-submit">提交</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/user.js"></script>
<style src="../public/css/form.css"></style>
<style scoped src="./css/user.css"></style>