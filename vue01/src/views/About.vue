<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="onclick">移動</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    onclick() {
      this.$router.push('/')
    }
  }
}
</script>
