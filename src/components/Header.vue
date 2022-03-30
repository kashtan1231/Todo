<template lang="pug">
.header
    .header__logo-box
        .logo-box__logo
</template>

<script>
export default {
     
}
</script>

<style lang="scss" scoped>
    .header {
        background-color: #333333;
        padding-top: 2.760vw;

        @media screen and (max-width: 999px) {
            padding-top: 5vw;
        }

        &__logo-box {
            padding: 0.781vw 0 0.781vw 19.635vw;
            background-image: linear-gradient(180deg, #00AFED 0%, #00569A 100%);

            @media screen and (max-width: 999px) {
                padding: 2vw 0;
            }

            .logo-box__logo {
                width: 5.365vw;
                height: 3.438vw;

                background-image: url(../assets/logo.svg);
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;

                @media screen and (max-width: 999px) {
                    margin: auto;
                    width: 10.300vw;
                    height: 6.600vw;
                }
            }
        }
    }
</style>