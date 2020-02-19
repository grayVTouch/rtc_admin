<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="title" :class="getClass(error.title)">
                            <td>标题</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.title">
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.title }}</span>
                            </td>
                        </tr>

                        <tr id="article_type_id" :class="getClass(error.article_type_id)">
                            <td>文章分类</td>
                            <td>
                                <v-select v-model="form.article_type_id" :data="article_type" :has="false" style="width: 300px;" :attr="value.attr"></v-select>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.article_type_id }}</span>
                            </td>
                        </tr>

                        <tr id="thumb" :class="getClass(error.thumb)">
                            <td>封面</td>
                            <td ref="image-container">
                                <div class='upload-image'>
                                    <div class='select-images'>
                                        <div class="upload-show">
                                            <div class="image-line"><img src="../../../plugin/UploadImage/image/upload_images.png" class="image upload-image-btn" /><span class="selected-count hide">10</span></div>
                                            <div class="text-line">请选择要上传的图片</div>
                                            <div class="clear-selected" title="清空已选择的图片"><img src="../../../plugin/UploadImage/image/clear_selected.png" class="image" /></div>
                                            <input type='file' name='upload_images' class='upload-images-input'  />
                                        </div>
                                        <div class="tip">这边是提示内容</div>
                                    </div>
                                    <!-- 预置显示图片 -->
                                    <div class="init-show-image-list">
                                        <img :src="form.thumb_explain" v-if="param.mode == 'edit' && form.thumb_explain" class="init-show-image" />
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
                            </td>
                        </tr>
                        <tr id="content" :class="getClass(error.content)">
                            <td>内容</td>
                            <td>
                                <div ref="editor" class="wang-editor"></div>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.content }}</span>
                            </td>
                        </tr>
                        <tr id="source" :class="getClass(error.author)">
                            <td>作者</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.author">
                                <span class="necessary"></span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.author }}</span>
                            </td>
                        </tr>
                        <tr id="weight" :class="getClass(error.weight)">
                            <td>权重</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.weight">
                                <span class="necessary"></span>
                                <span class="tip">默认：0</span>
                                <span class="msg">{{ error.weight }}</span>
                            </td>
                        </tr>
                        <tr id="enable" :class="getClass(error.enable)">
                            <td>启用？</td>
                            <td>
                                <i-radio-group v-model="form.enable">
                                    <i-radio v-for="(v,k) in business.bool_int" :label="k" :key="k">
                                        <span>{{ v }}</span>
                                    </i-radio>
                                </i-radio-group>
                                <span class="necessary"></span>
                                <span class="tip">默认：否</span>
                                <span class="msg">{{ error.enable }}</span>
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

<script src="./js/article.js"></script>
<style src="../../../asset/css/wangEditor.css"></style>
<style src="../public/css/public.css"></style>
<style scoped src="./css/article.css"></style>