<template>
    <span class="arrow">
        <i class="run-iconfont run-arrow top" :class="valueCopy != '' && valueCopy == asc ? 'focus' : ''" @click="clickEvent(asc)"></i>
        <i class="run-iconfont run-arrow btm" :class="valueCopy != '' && valueCopy == desc ? 'focus' : ''" @click="clickEvent(desc)"></i>
    </span>
</template>

<script>
    export default {
        name: "order" ,
        model: {
            name: 'value' ,
            event: 'change' ,
        },
        data () {
            return {
                valueCopy: '' ,
            };
        } ,

        props: {
            value: {
                default: '' ,
            } ,
            asc: {
                required: true ,
            } ,
            desc: {
                required: true ,
            } ,

            'on-change': {
                type: Function ,
            } ,
        } ,

        methods: {
            clickEvent (value) {
                this.valueCopy = value;
                this.$emit('change' , value);
                this.$emit('on-change' , value);
            } ,
        } ,

        watch: {
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