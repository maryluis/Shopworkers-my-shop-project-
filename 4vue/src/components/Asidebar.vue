<template>
    <div class="createBlock">
        <h2>Тип блока</h2>
        <div>
            <select v-model="type">
                <option>Заголовок</option>
                <option>Подзаголовок</option>
                <option>Текст</option>
                <option>Аватар</option>
            </select>
            <textarea v-model="text"/>
            <button type="submit" :disabled="text.length < 4" @click='createComponent'>Добавить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Aside-bar",
    emits: "create",
    data() {
        return(
            {
                type: "Заголовок",
                text: ""
            }
        )
    },
    methods: {
        createComponent() {
            let newObj = {};
            newObj.type = this.type;
            newObj.text = this.text;

            this.$emit("create", newObj);

            this.text = "";

        }
    }

}
</script>

<style>
    .createBlock {
        display: flex;
        flex-direction: column;
    }
    .createBlock div {
        display: flex;
        flex-direction: column;
    }
</style>