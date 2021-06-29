<template>
<div>
<form>
<div>
    <select v-model="language">
        <option value="">話せる言語は？</option>
        <option>日本語</option>
        <option>英語</option>
        <option>ドイツ語</option>
    </select>
</div>
<div>
    <select v-model="language2" multiple size="4">
        <option value="">話せる言語(複数)は？</option>
        <option>日本語</option>
        <option>英語</option>
        <option>ドイツ語</option>
    </select>
</div>
<div>
    <label for="kb">1KB：</label>
    <input type="radio" id="kb" v-model="unit"
      v-bind:value="{ name: 'キロバイト', size: 1024 }" /><br />
    <label for="mb">1MB：</label>
    <input type="radio" id="mb" v-model="unit"
      v-bind:value="{ name: 'メガバイト', size: 1048576 }" /><br />
    <label for="gb">1GB：</label>
    <input type="radio" id="gb" v-model="unit"
      v-bind:value="{ name: 'ギガバイト', size: 1073742000 }" />
</div>
        <!-- <button v-on:click="onclick">クリック</button> -->
        <!-- <button @click="onclick">クリック</button> -->
</form>
---------------------------<br />
<div> 言語：{{ language }}</div>
<div> 言語2：{{ language2 }}</div>
<div>選択値：{{ unit.name }}／{{ unit.size }}byte</div>

</div>
</template>

<script>

    export default {
        data() {
            return {
                agree: true,
                language: '',
                language2: [],
                unit: {},
                message: {}
            }
        },
        methods: {
            onclick() {

            }
        }
    }
</script>