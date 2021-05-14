<template>
  <div class="main">
    <div class="wrapper">
      <asidebar class="aside" @create="AddComponent"></asidebar>
      <div class="card">
        <h2 v-if="NewComponents.length === 0">
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
      <div class="commentsInner">
    <add-comment @Add="AddComment"></add-comment>
    <comments-inner :comments = "comments" :Delete = "RemoveComment"></comments-inner>
  </div>
  </div>

</template>

<script>
import Asidebar from "./components/Asidebar"
import TitleInner from "./components/TitleInner"
import SmallTitle from "./components/SmallTittle"
import TextInput from "./components/TextInput"
import AvatarInput from "./components/AvatarInput"
import AddComment from "./components/AddComment"
import CommentsInner from "./components/CommentsInner"
import axios from "axios"




export default {
  name: 'App',
  data() {
    return (
      {
        newProps: {},
        NewComponents: [],
        url: "https://comments-vue-default-rtdb.firebaseio.com/.json",
        comments: null,

      }
    )
  },
  methods: {
    AddComponent(e) {
      
      this.NewComponents.push(e)

    },
    async GetComments() {

      const comments = await axios.get(this.url);
      this.comments = comments.data

    },
    async AddComment(New) {
      console.log(New)
      await fetch(this.url, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(
              {
                  name: New.newName,
                  comment: New.newComment,
              }
          )
      });

    



      await this.GetComments();
    },

    async RemoveComment(id) {
      await axios.delete(`https://comments-vue-default-rtdb.firebaseio.com/${id}.json`)
      
      await this.GetComments();
    }

  },
  async mounted() {
    await this.GetComments();

  },
  components: {
    Asidebar,
    TitleInner,
    SmallTitle,
    TextInput,
    AvatarInput,
    AddComment,
    CommentsInner


  }
}
</script>

<style>
body {
  background-color:rgb(83, 81, 97);
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  padding:0%;
}
.card {
  background-color: rgb(223, 221, 233);
  padding: 20px;
  width: 80%;
  border-radius: 5%;
  margin: 10px;

  
}
.commentsInner {
  display:flex;
  flex-direction: column;
  background-color: rgb(223, 221, 233);
  padding: 20px;
  border-radius: 5%;
  margin: 10px;
  width: 70%
}
.aside {

  background-color: rgb(223, 221, 233);
  padding: 20px;
  border-radius: 5%;
  margin: 10px;

  
}
.componentsInner {

}
.commentsInner {
    width: 90%;

}
.aside select {
  margin-bottom: 5px;
}
.aside textarea {
  margin-bottom: 5px;
}
@media screen and (max-width: 600px) {
  .wrapper {
    flex-wrap: wrap;
  }
  .aside {
    width: 70%;
  }
}
</style>
