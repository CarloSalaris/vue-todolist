const{createApp} = Vue
createApp({
    data(){
        return {
            message:'messaggio di prova',
            logoImage:'',
        }
    },
    methods: {
        methodName() {
            //code
        }
    },
    mounted() {
	  //code
        console.log("ho caricato l'app");
    }
}).mount("#app")