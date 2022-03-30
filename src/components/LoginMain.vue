<template lang="pug">
.loginMain
    .loginMain__title Welcome to 
                    br 
                    | Business Analytics Online
    LoginForm.loginMain__form
    .loginMain__text <span style="font-weight: 500">Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
        ul.text__list
            li.list__cell
                .cell__icon
                .cell__title Interactive Reporting
                .cell__text In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.
            li.list__cell
                .cell__icon
                .cell__title Automated data updates
                .cell__text The application automatically updates and structures the data in just 60 seconds, saving you time and money.
            li.list__cell
                .cell__icon
                .cell__title Data Security
                .cell__text The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.
</template>

<script>
import LoginForm from './LoginForm.vue'
LoginForm

export default {
     components: {
        LoginForm
     }
}
</script>

<style lang="scss" scoped>

.loginMain {
    position: relative;
    padding: 11.198vw 19.323vw 2.083vw 19.479vw;

    background-image: url(../assets/bg.png);
    background-position: top left;
    background-size: contain;
    background-repeat: no-repeat;

    @media screen and (max-width: 999px) {
        background-size: cover;
    }

    &__title {
        margin-bottom: 3.646vw;

        color: #fff;
        font-size: 2.865vw;
        line-height: 156.69%;
        
        @media screen and (max-width: 999px) {
            font-size: 5.500vw;
        }
    }

    &__text {
        margin-top: 5.646vw;
        width: 34.583vw;

        font-weight: 400;
        font-size: 0.833vw;
        line-height: 156.69%;

        @media screen and (max-width: 999px) {
            width: calc(100% - 8vw);
            margin: 8vw 0;
            padding: 4vw;
            background-color: #fff;

            font-size: 3vw;
        }

        .text__list {
            padding: 0;
            margin-top: 1.563vw;
            margin-bottom: 0;

            :not(:last-child) {
                margin-bottom: 0.781vw;

                @media screen and (max-width: 999px) {
                    margin-bottom: 3vw;
                }
            }

            @media screen and (max-width: 999px) {
                margin-top: 5vw;
            }

            .list__cell {
                list-style-type: none;

                font-size: 0.833vw;
                line-height: 156.69%;

                @media screen and (max-width: 999px) {
                    font-size: 3vw;
                }

                .cell__icon {
                    display: inline-block;

                    width: 1.198vw;
                    height: 0.885vw;
                    margin-bottom: 0;

                    background-image: url(../assets/cell_point.svg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    @media screen and (max-width: 999px) {
                        width: 3.286vw;
                        height: 2.429vw;
                    }
                }

                .cell__title {
                    display: inline;
                    font-weight: 500;
                    margin-left: 0.781vw;

                    @media screen and (max-width: 999px) {
                        margin-left: 2vw;
                    }
                }

                .cell__text {
                    margin-left: 1.979vw;
                    margin-top: 0.521vw;

                    @media screen and (max-width: 999px) {
                        margin-left: 5.5vw;
                    }
                }
            }
        }
    }

    &__form {
        position: absolute;
        top: 14.323vw;
        left: 55.573vw;

        @media screen and (max-width: 999px) {
            position: static;

            width: calc(100% - 8vw);
        }
    }
}

</style>