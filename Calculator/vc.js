
const root = new Vue({
    el: '.container',
    data: function(){
        return {
            input1: 1,
            num: 2,
            useful_length: 1,
            data_num: ['',''],
        }
    },
    methods: {
        switch_to_next(e){
            console.log(e.target);
        }
    },
    watch: {
        num:{
            handler: function(newVal, oldVal){
                if(newVal > oldVal){
                    this.data_num.push('');
                }else{
                    this.data_num.pop();
                }
            }
        },
        data_num:{
            handler: function(){
                for(i = 0; i < this.data_num.length; i++){
                    if (this.data_num[i].length == this.useful_length){
                        if (document.getElementById('data'+(i+1))){
                            document.getElementById('data'+(i+1)).focus();
                        }
                    }
                }
            }
        }
    },
    computed: {
         Sample_Standard_Deviation: {
            get() {
                sum = 0;
                for(i = 0; i < this.data_num.length; i++){
                    sum += Number(this.data_num[i]);
                };
                ex = 0;
                for(i = 0; i < this.data_num.length; i++){
                    ex += (Number(this.data_num[i]) - (sum/this.data_num.length))**2;
                }
                return (ex/(this.data_num.length - 1))**0.5;
            }

        },
        Average: {
            get() {
                sum = 0;
                for(i = 0; i < this.data_num.length; i++){
                    sum += Number(this.data_num[i]);
                };
                return sum/this.data_num.length;
            }
        },
        Sample_Variance: {
            get() {
                sum = 0;
                for(i = 0; i < this.data_num.length; i++){
                    sum += Number(this.data_num[i]);
                };
                ex = 0;
                for(i = 0; i < this.data_num.length; i++){
                    ex += (Number(this.data_num[i]) - (sum/this.data_num.length))**2;
                };
                return ex/(this.data_num.length - 1);
            }

        }
    }
});







