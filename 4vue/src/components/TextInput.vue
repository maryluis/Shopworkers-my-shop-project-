<template>
  <p>
      {{text}}
  </p>
</template>

<script>
export default {
    name: "TextInput",
    props: {
        text: String,
    }
}
</script>

<style scoped>
    p {
        text-align: justify;
        line-height: 1.7;
        font-size: 12px;
    }
</style>