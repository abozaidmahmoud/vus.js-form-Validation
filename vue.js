

Vue.component('signupform',{
    template:`#signupform`,
    data(){
      return {
          email:'',
          password:'',
          confPassword:'',
          msg:[],
          disableSubmitBtn:true,
          name:'',
      }
    },
    methods:{
        changeComponent(val){
           this.$emit('change',val);
        },
        checkemail(val){
            if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(val))
            {
              this.msg[this.name]='';
            }else {
                this.msg[this.name]='keeep type we waiting for rigth email';
            }
        },
        checkPassword(val){
            this.checkPasswordLength(val);
        },
        checkConfPassword(val){
           if(this.checkPasswordLength(val)){
               if(val==this.password){
                   this.msg[this.name]='';
                   this.disableSubmitBtn=false;
               }else{
                   this.msg[this.name]='password not match';
                   this.disableSubmitBtn=true;
               }
           }

        },
        eventname(){
            this.name = event.target.name;

        },


        checkPasswordLength(val){
            var remain=6-val.length;
            if(val.length<6){
                this.msg[this.name]='password must be at least 6 '+ remain+ ' chars remains keep go  ';
                this.disableSubmitBtn=true
                return false;
            }else{
                this.msg[this.name]='';
                return true;            }
        },
        finish(){
            alert('finish vuejs task');
        }

    },
    watch:{
        email:function (val) {
           this.eventname();
           this.checkemail(val);
        },
        password:function (val) {
            this.eventname();
            this.checkPassword(val);

        },
        confPassword:function (val) {
            this.eventname();
            this.checkConfPassword(val);
        },

    }
});

Vue.component('termCondition',{
    template:`#termCondition`,
    methods:{
        changeComponent(val){
            this.$emit('change',val);
        }
    }
});

new Vue({
   el:'#app',
    data:{
       componentName:'signupform'
    },
    methods:{
        change(component_name){
         this.componentName=component_name;
       }
    }
});