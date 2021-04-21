var app = new Vue(
    {
        el: '#root',
        data: {
            userNewTodo: '',
            todos: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        },
        methods: {
            // Add new todo in todos array
            addNewTodo() {
                // Si avvia la funzione solo se 
                // l'utente scrive qualcosa
                if ( this.userNewTodo.length > 0 ) {
                    this.todos.push(this.userNewTodo)
                    this.userNewTodo = '';
                }
            },
            //Rimuove un elemento dall'array todo
            deleteTodo(index) {
                this.todos.splice(index, 1)
            }
        }
    }
)