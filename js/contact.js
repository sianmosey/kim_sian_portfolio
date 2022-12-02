import { SendMail } from "./components/mailer.js";

(() => {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Hello Vue!'
            }
        },
        

        methods: {
            processMailFailure(result) {      
                result = JSON.parse(result.message);
                
                this.$refs["emessage"].innerHTML = result.message;
                this.$refs["emessage"].style.display = 'block';
                this.$refs["smessage"].style.display = 'none';
                message.forEach(field => this.$refs[field].classList.add('error'));
                console.log(result)
            },

            processMailSuccess(result) {

                this.$refs["smessage"].innerHTML = result.message;
                this.$refs["smessage"].style.display = 'block';  
                this.$refs["emessage"].style.display = 'none';
                console.log(result)
                
            },

            processMail(event) {     
                // use the SendMail component to process mail
                SendMail(this.$el.parentNode)
                    .then(data => this.processMailSuccess(data))
                    .catch(err => this.processMailFailure(err));
            }
        }
    }).mount('#mail-form')

    const headerTag = document.querySelector("header")
    // const aheaderTag = document.querySelector("header ul a")
    const headericonTag = document.querySelector(".menu")


    document.addEventListener("scroll", function(){
      if(window.scrollY > headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled");
        // aheaderTag.classList.add("scrolled");
        headericonTag.classList.add("scrolled");

      }else{
        headerTag.classList.remove("scrolled");
        // aheaderTag.classList.remove("scrolled");
        headericonTag.classList.remove("scrolled");
  }

})
})();