/* Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task done
- un booleano (true/false) che indica se il task è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.

BONUS
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell’item invertire il valore della proprietà doneTask del task corrispondente (se done era uguale a false, impostare true e viceversa) */

const{createApp} = Vue
createApp({
    data(){
        return {
            logoImage:'img/logo.png',
            newTask: '',
            error: false,
            tasks:[
                {
                    text:'task esempio',
                    doneTask: true
                },{
                    text:'task1 esempio',
                    doneTask: true
                },{
                    text:'task2 esempio',
                    doneTask: false
                },{
                    text:'task3 esempio',
                    doneTask: false
                }
            ]
        }
    },
    methods: {
        addTask() {
            if (this.newTask !== '') {
                this.tasks.unshift({text:this.newTask, doneTask: false});
                this.error = false;
            }else{
                this.error = true;
            }
            this.newTask = '';
        },
        removeTask(value) {
            this.tasks.splice(value, 1);
        },
        doneUndone(index) {
            this.tasks[index].doneTask = !this.tasks[index].doneTask;
            }
    },
    mounted() {
	  //code
        console.log("ho caricato l'app");
    }
}).mount("#app")