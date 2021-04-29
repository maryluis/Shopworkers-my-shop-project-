const App = {
    data() {
        return {
            tittle : "Счетчик",
            notesTittle: "Заметки",
            counter: 0,
            notes: [],
            note: "",
        }
    },
    methods: {
        noteAdd() {
            if(this.note !== "") {
                this.notes.push({note:this.note, 
                                    checked: false});

                this.note = ""
            }
        },
        inputChanger(e) {
            this.note = e.target.value
        },
        check(index) {
            this.notes.splice(index, 1)         

        }

    }
}

Vue.createApp(App).mount("#vue")