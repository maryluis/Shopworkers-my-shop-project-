const app = Vue.createApp(
    {
        data() {
            return (
                {
                    title: "План по изучению Vue.js",
                    description:` В блоке вы познакомитесь со всеми основами Vue.js 
                        на практике. На протяжении блока
                        мы напишем реактивное приложеие, 
                        в процессе разработки которого разберем всю базу фрейсворка`,
                    numbers: [ {
                        title:"Основы",
                        description:` В блоке вы познакомитесь со всеми основами Vue.js 
                            на практике. На протяжении блока
                            мы напишем реактивное приложеие, 
                            в процессе разработки которого разберем всю базу фрейсворка`},
                        {
                            title:"Компоненты", 
                            description:`Один из самых важных блоков в курсе, где вы узнаете все о 
                            компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 
                            различных UI компонентов как в реальной разработке. Блок расскажет про 
                            абсолютно все составляющие, которые есть в компонентах:
                            взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.`
                        },
                        {title: "Роутер", 
                        description:` В данном блоке вы узнаете о том, как работает мультиязычность во Vue.
                            Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать
                            с динамическим роутером.`},
                        {title: "Vuex",
                        description:`В блоке вы узнаете все про Vuex. Вы узнаете как работать с данными, 
                            какие есть лучшие практики по их программированию и структурированию. Все на практике.`},
                        {title: "Composition",
                        description:`Одним из наиболее важных обновлений в Vue 3 является 
                            появление альтернативного синтаксиса Composition API. В этом блоке вы
                            узнаете как работать совместно с Vue Router и Vuex.`}],
                    charpterNumber: 1,
                    finished: false,
                }
            )
        },
        methods: {
            chose(index) {
                if(this.finished !== true) {
                    this.charpterNumber = index + 1;
                    this.description = this.numbers[index].description
                }
            },
            nextStep() {
                this.charpterNumber = this.charpterNumber + 1;
                this.description = this.numbers[(this.charpterNumber-1)].description
            },
            lastStep() {
                this.charpterNumber = this.charpterNumber - 1;
                this.description = this.numbers[(this.charpterNumber-1)].description
            },
            finish() {
                this.finished = true
            },
            start() {
                this.finished = false;
                this.charpterNumber = 1;
                this.description = this.numbers[0].description
            }
        },
       
        template: `
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        <div class="numberWrapper">
            <ul>
                <li v-for="(number, index) in numbers">
                    <span 
                        :class="(charpterNumber === (index + 1)) ? 'chosen' :
                            ((charpterNumber > (index + 1)) ? 'green' : 'grey')
                            "
                        @click="chose(index)">
                        {{index+1}}

                    </span>
                    <h5>{{number.title}}</h5>
                </li>
            </ul>
        </div>
        <div class="buttonWrapper">
            <div class = "main" v-if="finished !== true">
                <button 
                    :class = "charpterNumber === 1 ? 'disabled' : 'disabledFalse'"
                    :disabled = "charpterNumber === 1"
                    @click = "lastStep">НАЗАД</button>
                <button v-if="charpterNumber !== 5" 
                    class = "chosen"
                    @click = "nextStep">ВПЕРЕД</button>
                <button v-else="charpterNumber !== 5" 
                    class = "chosen"
                    @click = "finish">ЗАКОНЧИТЬ</button>
            </div>
            <div v-else>
                <button 
                    class = "finished"
                    @click = "start">НАЧАТЬ ЗАНОВО</button>
            </div>
        </div>
        `
    }
)
app.mount("#app")