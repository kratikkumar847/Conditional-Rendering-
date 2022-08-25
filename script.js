
// Root component option
const options ={
    data(){
        return {
            appName : 'kratik',
           showName : true
        }
    }
}

// Application instance 
const app = Vue.createApp(options);
// View model instance of component
const vm = app.mount('#app');