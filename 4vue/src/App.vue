<template>
  <div class="wrapper">
    <asidebar class="card" @create="AddComponent"></asidebar>
    <div class="card">
      <h2>
          Добавьте первый блок, чтобы увидеть результат
      </h2>
      <div id="componentsInner" v-if="NewComponents.length > 0">
        <div v-for="(component, i) in NewComponents" :key="i">
          <title-inner v-if="component.type ==='Заголовок'" :title="component.text"/>
          <small-title v-if="component.type ==='Подзаголовок'" :title="component.text"/>
          <text-input v-if="component.type ==='Текст'" :text="component.text"/>
          <avatar-input v-if="component.type ==='Аватар'" :ImgUrl="component.text"/>
        </div>

        
        
        
      </div>
    </div>
  </div>
</template>

<script>
import Asidebar from "./components/Asidebar"
import TitleInner from "./components/TitleInner"
import SmallTitle from "./components/SmallTittle"
import TextInput from "./components/TextInput"
import AvatarInput from "./components/AvatarInput"



export default {
  name: 'App',
  data() {
    return (
      {
        newProps: {},
        NewComponents: [],

      }
    )
  },
  methods: {
    AddComponent(e) {
      
      this.NewComponents.push(e)

    }
  },
  components: {
    Asidebar,
    TitleInner,
    SmallTitle,
    TextInput,
    AvatarInput

  }
}
</script>

<style>
body {
  background-color:rgb(83, 81, 97);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  padding:0% 10%;
}
.card {
  background-color: rgb(223, 221, 233);
  padding: 20px;
  border-radius: 5%;
  margin: 10px;
  
}
@media screen and (max-width: 600px) {
  .wrapper {
    flex-wrap: wrap;
  }
}
</style>
