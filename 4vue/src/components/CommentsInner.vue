<template>
    
    <div v-if="comments" class="commentsWrapper" >
        <div class="oneComment" v-for="(comment, id) in comments" :key="id">
            <div>
                <h5>{{comment.name}}</h5>
                <p>{{comment.comment}}</p>

            </div>
            <button @click="Delete(id)"> Удалить</button>
        </div>
    </div>

</template>

<script>


export default {
    name: "Comments",
    props: {
        comments: Object,
        Delete: Function
    },


}
</script>

<style scoped>
    input {
        margin: 5px 0px;
    }
    textarea {
        margin: 5px 0px;
    }
    button {
        width: 150px;
        margin: 5px;
    }

    .oneComment {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(83, 81, 97);
        margin-bottom: 5px;

    }
    .oneComment h5 {
        text-align: start;
        margin: 0;
    }
    .oneComment p {
        text-align: start;
        font-size: 12px;
    }
    .oneComment button {
        width: 70px;
        height: 30px;
        font-size: 10px;
    }
</style>