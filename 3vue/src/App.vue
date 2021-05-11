<template>
  <div class="wrapper">
    <h1>Работа с формой</h1>
    <form @submit.prevent="SubmitHandler">
      <div class="inputName, formInner">
        <span>Как вас зовут? </span>
        <input type="text" v-model.trim="name" :class="{danger: !consistName}">
        <small v-if="!consistName">Необходимое поле ввода</small>
      </div>
      <div class="inputAge, formInner">
        <span>Сколько вам лет? </span>
        <input type="number" v-model.number="age" min="18" max="70">
      </div>
      <div class="inputCity, formInner">
        <span>Выберите ваш город </span>
        <select v-model="city"> 
          <option>Киев</option>
          <option>Харьков</option>
          <option>Одеса</option>
          <option>Другое</option>
        </select>
      </div>
      <div class="inputArrive, formInner">
        <span>Возможен переезд в другой город </span>
        <label>Да<input type="radio" name="arrive" id="" v-model="relocate" value="yes"></label>
        <label>Нет<input type="radio" name="arrive" id="" v-model="relocate" value="no"></label>
      </div>
      <div class="inputCheckbox, formInner">
        <span>Какими навыками вы владеете?</span>
        <div class="checkBox">
          <label for=""><input type="checkbox" name="skills" id="" v-model="skills" value="Vue">Vue</label>
          <label for=""><input type="checkbox" name="skills" id="" v-model="skills" value="React">React</label>
          <label for=""><input type="checkbox" name="skills" id="" v-model="skills" value="Angular">Angular</label>
        </div>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {

  },
  data() {
    return(
      {
        name: "",
        consistName: true,
        age: 23,
        city: "Харьков",
        relocate: null,
        skills: []

      }
    )
  },
  methods: {
    SubmitHandler(){
      if(this.name.length) {
        this.consistName = true;
        console.group();
        console.log("Имя: " + this.name);
        console.log("Возраст:" + this.age);
        console.log("Город:" + this.city);
        console.log("Готовность к переезду:" + this.relocate);
        console.log("Навыки:" + this.skills);
        console.groupEnd();
      } else {
        this.consistName = false;
      }
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(161, 155, 155);
  height: 45em;
  width: 100%;
}
.wrapper {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formInner {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.checkBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.checkBox label {
  width: 100px;
  display: flex;
  justify-content: flex-start;
}
button {
  background-color: #2c3e50;
  width: 120px;
}
small {
  color: rgb(131, 51, 51);
}
.danger {
  border-width: 2px;
  border-style: solid;
  border-color: rgb(131, 51, 51);
}
.checkBox input:checked {
  background: #2c3e50;
}

</style>
