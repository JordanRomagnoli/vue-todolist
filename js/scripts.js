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

            if(this.newTaskInput.length > 2){
                
                let newTask = {};

                newTask.text = this.newTaskInput;
                newTask.done = false;
                
                console.log(newTask);

                this.todos.push(newTask);

                this.newTaskInput = '';


                console.log(this.todos);

            };

        },

        removeTask(i) {
            this.todos.splice(i, 1);
        },

    },
}).mount('#app');