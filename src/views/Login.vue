<template lang="pug">
.login
    Header
    LoginMain
    Footer
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import LoginMain from '../components/LoginMain.vue'


export default {
    components: {
        Header,
        LoginMain,
        Footer
    },

    created() {
        if(this.profile.isLogged) {
            window.location.href = 'http://localhost:8080/todo'
        }
    },

    data:() => ({
        profile: JSON.parse(localStorage.getItem('profile'))
    })
}
</script>

<style lang="scss" scoped>
</style>