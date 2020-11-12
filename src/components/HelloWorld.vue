<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
