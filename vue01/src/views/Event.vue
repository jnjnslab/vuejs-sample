<template>
<div>
    <button v-on:click="onclick">クリック</button>
    <!-- <button @click="onclick">クリック</button> -->
    <button v-on:click="onclick2('こんにちは')">引数あり</button>
    <button v-on:click="onclick3('こんにちは',$event)">引数あり</button>
    <p>{{ message }}</p>
</div>
</template>

<script>

    export default {
        data() {
            return {
                message: {
                }
            }
        },
        methods: {
            onclick() {
                this.message = new Date().toLocaleString();
            },
            onclick2(parm) {
                this.message = parm;
            },
            onclick3(parm,e) {
                this.message = parm;
                console.log(e);
            }
        }
    }
</script>