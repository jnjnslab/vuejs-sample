<template>
<div>

<input type="button" v-on:click="onclick(-1)" value="-" />
{{ count }} / {{ ceiling }}
<input type="button" v-on:click="onclick(1)" value="+" />

</div>
</template>

<script>
    export default {
    data() {
        return {
        }
    },
    computed: {
        count() {
          return this.$store.state.count
        },
        // ceiling() {
        //   return this.$store.getters.ceiling
        // },
        // 引数付きのゲッター
        ceiling() {
          return this.$store.getters.ceiling(10)
        }
    },
    methods: {
        onclick(step) {
          this.$store.commit('update', { step })
        }
    }
    
    }
</script>