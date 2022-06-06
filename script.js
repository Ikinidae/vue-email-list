const app = new Vue({
    el : "#app",
    data: {
        email : []
    },
    mounted() {
        const emails = this.email;
        for(i = 0; i < 11; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)=> {
                const singleEmail = result.data.response;
                emails.push(singleEmail);
            })
        }
        console.log(emails);
    }
})