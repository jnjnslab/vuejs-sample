<template>
<div>

<ul>
  <li v-for="(value, key, i) in member">
    {{ key }} ：{{ value }}
  </li>
</ul>

</div>
</template>

<script>
    export default {
        data() {
            return {
                member: {
                    name: '山田太郎',
                    age: 30,
                    mail: 'yamada@example.com'
                }
            }
        },
        methods: {
            onclick() {
            }
        }
    }
</script>