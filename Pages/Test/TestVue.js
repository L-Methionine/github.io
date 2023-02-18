const vm =new Vue({
    el:'#test',
    data(){
        return {

        }
    },
    methods: {
        aaa(e){
            console.log(e.target.innerHTML);
        }
    }
})