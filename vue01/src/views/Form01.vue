<template>
<div>
<form>
<div>
    <label for="name">氏名：</label>
    <input type="text" id="name" v-model="myName" />
</div>
<div>
    <label for="man">男性</label>
    <input type="radio" id="man" value="男性" v-model="gender" />
    <br />
    <label for="woman">女性</label>
    <input type="radio" id="woman" value="女性" v-model="gender" />
    <br />
    <label for="other">その他</label>
    <input type="radio" id="other" value="その他" v-model="gender" />
</div>
<div>
    <label for="agree">同意する：</label>
    <input type="checkbox" id="agree" v-model="agree" />
    <!-- <input type="checkbox" id="agree" v-model="agree"
        true-value="○" false-value="×" /> -->
</div>
<div>
    <div>話せる言語は？</div>
    <label for="japanese">日本語</label>
    <input type="checkbox" id="japanese" value="日本語" v-model="language" />
    <label for="english">英語</label>
    <input type="checkbox" id="english" value="英語" v-model="language" />
    <label for="german">ドイツ語</label>
    <input type="checkbox" id="german" value="ドイツ語" v-model="language" />
</div>
        <!-- <button v-on:click="onclick">クリック</button> -->
        <!-- <button @click="onclick">クリック</button> -->
</form>
---------------------------<br />
<div>こんにちは、{{ myName }} さん！</div>
<div> 性別：{{ gender }}</div>
<div>同意する：{{ agree }} </div>
<div> 言語：{{ language }}</div>

</div>
</template>

<script>

    export default {
        data() {
            return {
                myName: 'ゲスト',
                gender: '男性',
                agree: true,
                language: [],
                message: {
                }
            }
        },
        methods: {
            onclick() {

            }
        }
    }
</script>