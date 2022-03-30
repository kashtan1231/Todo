<template lang="pug">
.login-form
    form.login-form__form
        .form__name
            .title Name
            input(type="text" name="name" v-model="profile.name")
        .form__password
            .title Password
            input(type="password" name="password" v-model="profile.password")
    .login-form__enter
        button.enter-button(@click="onLogin") LOGIN
        a.enter-forgot(href="#") Forgot Password
    a.login-form__register(href="#") Register now
</template>

<script>
export default {
    data:() => ({
        profile: {
            isLogged: false
        }
    }),

    methods: {
        onLogin() {
            if(this.profile.name === "Admin" && this.profile.password === "12345") {
                window.location.href = "http://localhost:8080"
                this.profile.isLogged = true
                localStorage.setItem('profile', JSON.stringify(this.profile))
                console.log(localStorage.getItem('isLogged'))
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login-form {
    width: 25.052vw;
    padding: 2.083vw 1.563vw 0;
    background-color: #fff;

    box-shadow: 0.104vw 0.104vw 0.781vw 0.104vw rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 999px) {
        padding: 4vw;
        padding-bottom: 0;

        box-shadow: none;
    }

    &__form {
        & > div{
            margin-bottom: 2.083vw;
        }

        .title {
            margin-bottom: 0.365vw;

            font-weight: 300;
            font-size: 0.938vw;
            line-height: 1.094vw;
            color: #333333;

            @media screen and (max-width: 999px) {
                font-size: 3vw;
                line-height: 156%;
                margin-bottom: 1vw;
            }
        }

        input {
            width: calc(100% - 1.55vw);
            padding: 0.833vw 0.781vw;

            border: #9A9A9A 0.052vw solid;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 0.938vw;
            line-height: 1.094vw;

            @media screen and (max-width: 999px) {
                width: calc(100% - 4vw);

                font-size: 3vw;
                line-height: 100%;
                padding: 2vw;
            }

            &:focus {
                border: #101010 0.052vw solid;
                outline: none;
            }
        }
    }

    &__enter {
        display: flex;
        flex-direction: column;
        
        .enter-button {
            width: 100%;
            padding: 0.625vw 0 .5vw;

            font-size: 1.302vw;
            line-height: 1.510vw;
            text-align: center;
            text-decoration: none;

            border: 0.104vw solid #0076C0;
            background-color: #0076C0;
            color: #fff;
            transition-duration: .2s;

            &:hover {
                border-width: 0.104vw;
                background-color: #fff;
                color: #0076C0;
                cursor: pointer;
            }

            @media screen and (max-width: 999px) {
                font-size: 4vw;
                line-height: 156%;
            }
        }

        .enter-forgot {
            display: inline-block;
            margin: 1.094vw auto;
            
            text-align: center;
            font-size: 1.042vw;
            line-height: 1.198vw;
            color: #056DAE;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }

            @media screen and (max-width: 999px) {
                font-size: 3vw;
                line-height: 156%;
            }
        }
    }

    &__register {
        display: block;
        padding: 0.885vw;
        margin: 0 -1.55vw;

        color: #333333;

        text-decoration: none;
        text-align: center;
        font-size: 1.302vw;
        line-height: 1.510vw;

        background-color: #F6F6F6;
        transition-duration: .2s;

        @media screen and (max-width: 999px) {
            margin: 0 -4vw;
            font-size: 3vw;
            line-height: 156%;
        }

        &:hover {
            background-color: #e9e9e9;
        }
    }
}
</style>