
const root = new Vue({
    el: '.container',
    data: function(){
        return {
            input1: 1,
            num: 2,
            useful_length: 1,
            real_useful_length: 1,
            data_num: ['',''],
        }
    },
    methods: {
        switch_to_next(e){
            console.log("success")
            input__innerId = + e.target.id.slice(4,5)
            if(document.getElementById('data'+(input__innerId+1))){
                document.getElementById('data'+(input__innerId+1)).focus()
            }
        },
        defineRealUsefulLength(e){
            console.log("success")
            if(e.target.value.indexOf('.') != -1){
                this.real_useful_length = this.useful_length + 1
            }else{
                this.real_useful_length = this.useful_length
            }
        }
    },
    watch: {
        num:{
            handler: function(newVal, oldVal){
                if(newVal > oldVal){
                    for(i = 2;i < this.num; i++){
                        this.data_num[i] = ''
                    }
                }else{
                    this.data_num = this.data_num.slice(0, this.num)
                }
            }
        },
        data_num:{
            handler: function(){
                for(i = 0; i < this.data_num.length; i++){
                    if (this.data_num[i].length == this.real_useful_length){
                        if (document.getElementById('data'+(i+1))){
                            document.getElementById('data'+(i+1)).focus();
                        }
                    }
                }
            },
            deep: true
        },
        useful_length:{
            handler: function(){
                return this.real_useful_length = this.useful_length
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







