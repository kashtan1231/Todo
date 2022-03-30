<template lang="pug">
.footer
    .footer__logo-and-table
        .logo-and-table__logo.desktop
        .logo-and-table__table
            a.table__cell(href="#") Terms & Conditions
            a.table__cell(href="#") Privacy
            a.table__cell(href="#") Notice at Collection
            a.table__cell(href="#") CA Privacy Hub
            a.table__cell(href="#") Contact Us
            a.table__cell(href="#") Sitemap
    .footer__line
    .footer__copyright Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .footer {
        background-color: #333333;
        padding: 1.563vw 19.583vw 1.563vw 19.792vw;

        @media screen and (max-width: 999px) {
            padding: 10vw 20vw;
        }

        &__logo-and-table {
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 999px) {
                display: block;
            }

            .logo-and-table__logo {
                width: 2.917vw;
                height: 1.823vw;

                background-image: url(../assets/logo.svg);
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }

            .logo-and-table__table {
                display: flex;

                @media screen and (max-width: 999px) {
                    flex-direction: column;
                }

                .table__cell {
                    align-self: center;
                    color: #fff;
                    font-weight: 500;
                    font-size: 0.833vw;
                    line-height: 156.69%;
                    text-decoration: none;

                    @media screen and (max-width: 999px) {
                        font-size: 3vw;
                    }

                    &:hover {
                        text-decoration: underline;
                    }
                }

                :not(:last-child) {
                    margin-right: 1.042vw;

                    @media screen and (max-width: 999px) {
                        margin-right: 0;
                        margin-bottom: 2vw;
                    }
                }
            }
        }

        &__line {
            width: 100%;
            height: 0.052vw;
            margin: 1.589vw 0;
            background-color: #fff;

            @media screen and (max-width: 999px) {
                margin:  5vw 0;
            }
        }

        &__copyright {
            color: #fff;
            font-weight: 500;
            font-size: 0.625vw;
            line-height: 156.69%;

            @media screen and (max-width: 999px) {
                font-size: 3vw;
            }
        }
    }

    .desktop {
        @media screen and (max-width: 999px) {
            display: none;
        }
    }
</style>