<template>

  <img :src='ImgUrl'/>



</template>

<script>
export default {
    name: "AvatarInput",
    props: {
        ImgUrl: String,
    }
}
</script>

<style scoped>
    img  {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
</style>