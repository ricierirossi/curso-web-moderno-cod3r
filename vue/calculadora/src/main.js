import Vue from 'vue';
import App from './App';

new Vue({
    
    /* pega o componente do Vue e renderiza na pode ser substituido por render: h => h(App)
    
    render(createElement) { 
        return createElement(App); 
    },

*/
    render: h => h(App)
}).$mount("#app") // o mesmo que usar el: '#app'
