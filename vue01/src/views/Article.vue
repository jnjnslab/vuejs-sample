<template>
  <div class="article">
    <span>記事コード:{{ id }}</span>
  </div>
</template>
<script>
export default {
  name: 'Article',
  props: ['id'],
}
</script>