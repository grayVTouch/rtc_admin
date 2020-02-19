<template>
    <div class="container">
        <v-loading ref="loading"></v-loading>
        <!-- 路由填充区域 -->
        <transition name="fade">
            <router-view class="fade"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "app" ,
        mounted () {
            topContext.ins.loading = this.$refs.loading.ins.loading;
        } ,
    }
</script>

<style scoped>
    /**
     * 组件过渡动画
     */
    .fade {
        transition: all 1s linear;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {

    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave {
        opacity: 1;
    }


    .fade-leave-active {

    }

    .fade-leave-to {
        opacity: 0;
    }
</style>