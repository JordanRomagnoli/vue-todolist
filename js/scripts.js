const { createApp } = Vue;

createApp ({
    data() {
        return {

            todos : [
                {
                    text: 'fare i compiti',
                    done: false,
                },
                {
                    text: 'andare in palestra',
                    done: true,
                },
                {
                    text: 'chiamare ufficio',
                    done: false,
                },
            ],

            newTaskInput : '',

        };
    },
    methods : {

        addTask(){

            if(this.newTaskInput.trim().length > 2){
                
                let newTask = {};

                newTask.text = this.newTaskInput;
                newTask.done = false;
                
                console.log(newTask);

                this.todos.push(newTask);

                this.newTaskInput = '';

            };

        },

        removeTask(i) {
            this.todos.splice(i, 1);
        },

        toggleDone(i) {
            this.todos[i].done = !this.todos[i].done;
        },

    },
}).mount('#app');