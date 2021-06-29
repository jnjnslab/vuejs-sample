<template>
<div>
<form>
    <label for="show">表示／非表示</label>
    <input type="checkbox" id="show" v-model="toggle" />
</form>
<div id="panel" v-if="toggle">
<!-- <div id="panel" v-show="toggle"> -->
<h3>式の真偽に応じて表示／非表示を切り替える - v-if</h3>
<div>v-ifは、JavaScriptのif命令に相当するディレクティブです。<br />
指定された条件式がtrueの場合にだけ、現在の要素を出力します。</div>
</div>
<div v-else>現在、非表示状態です。</div>

</div>
</template>

<script>

    export default {
        data() {
            return {
                toggle: true
            }
        },
        methods: {
            onclick() {

            }
        }
    }
</script>