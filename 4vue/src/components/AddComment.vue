<template>
    <input placeholder="Введите имя" type="text" v-model="name"/>

    <textarea placeholder="Комментарий" name="" id="" cols="30" rows="10" v-model="comment"></textarea>

    <button :disabled='IsTextAndNameFiled' @click="AddNewComment(name, comment)">Добавить комментарий</button>
</template>

<script>
export default {
    name: "AddComments",
    data() {
        return(
            {
                url: "https://comments-vue-default-rtdb.firebaseio.com/.json",
                name: "",
                comment: ""
            }
        )
    },
    methods: {
        AddNewComment() {
            let New = {}
            New.newName = this.name;
            New.newComment = this.comment;
            this.name = '';
            this.comment = '';
            this.$emit('Add', New);

        }
    },
    computed: {
        IsTextAndNameFiled() {
            return !(this.name && this.comment);
        }
    }
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
</style>