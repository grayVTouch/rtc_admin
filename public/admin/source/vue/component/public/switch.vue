<template>
    <i-switch :size="size" :true-value="1" :false-value="0" v-model="valueCopy" @on-change="changeEvent"></i-switch>
</template>

<script>
    export default {
        name: "v-switch" ,
        data () {
            return {
                valueCopy: 0 ,
            };
        } ,
        model: {
            prop: 'value' ,
            event: 'change' ,
        } ,
        props: {
            value: {
                default: 0 ,
            } ,
            size: {
                default: 'default' ,
            } ,
            // 额外的数据
            extra: {
                default: null
            } ,
            'on-change': {
                type: Function ,
                default: null
            }
        } ,
        methods: {
            changeEvent (val) {
                this.$emit('on-change' , val , this.extra);
            } ,
        } ,
        watch: {
            valueCopy (newVal , oldVal) {
                this.$emit('change' , newVal);
            } ,

            value: {
                immediate: true ,
                handler (newVal , oldVal) {
                    this.valueCopy = newVal;
                } ,
            } ,
        } ,
    }
</script>

<style scoped>

</style>