<template lang="pug">
.pop-up
    .pop-up__title Title:
    input(type="text" v-model="innerTask.title").pop-up__title-input
    .pop-up__title Description:
    textarea(type="text" v-model="innerTask.desc").pop-up__desc-input
    .pop-up__buttons
        button.buttons__apply(@click="confirm()") Apply
        button.buttons__cancel(@click="$emit('close')") Cancel
        button.buttons__delete(@click="$emit('delete')" v-if="isExistedTask") Delete
    </template>

<script>
export default {
    data:() => ({
        isExistedTask: false,

        innerTask: {
            title: "",
            desc: ""
        }
    }),

	mounted () {
		this.innerTask.title = this.taskProp.title
		this.innerTask.desc = this.taskProp.desc
        this.isExistedTask = this.innerTask.title && this.innerTask.desc
	},

    props: {	
        taskProp: {
            title: "",
            desc: ""
        }
    },

    methods: {
        confirm() {
            if(this.innerTask.title && this.innerTask.desc)
            this.$emit('confirm', this.innerTask)
        }
    }
}
</script>

<style lang="scss" scoped>
.pop-up {
    padding: 3.083vw;
    margin: auto;
    width: 31.250vw;
    background-color: #fff;

    @media screen and (max-width: 999px) {
        width: 70vw;
        padding: 5vw;
    }

    &__title {
        margin-bottom: 1vw;

        color: #333333;

        font-weight: 300;
        font-size: 1.146vw;
        line-height: 1.094vw;

        @media screen and (max-width: 999px) {
            font-size: 4vw;
            line-height: 100%;
            margin-bottom: 2vw;
        }
    }

    input, textarea {
        width: calc(100% - 1.683vw);
        padding: 0.833vw;
        margin-bottom: 2.083vw;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.938vw;
        line-height: 1.094vw;

        border: #9A9A9A 0.052vw solid;

        @media screen and (max-width: 999px) {
            width: calc(100% - 4vw);
            font-size: 4vw;
            line-height: 100%;
            margin-bottom: 3vw;
            padding: 2vw;
        }

        &:focus {
            border: #101010 0.052vw solid;
            outline: none;
        }
    }

    &__buttons {
        display: flex;
        flex-direction: row-reverse;
        width: 14.313vw;
        margin-left: auto;

        @media screen and (max-width: 999px) {
            width: 100%;
        }

        button {
            padding: 0.625vw;
            margin-left: 1vw;

            border: 0.104vw solid #0076C0;
            background-color: #fff;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 0.938vw;
            line-height: 1.094vw;

            transition-duration: .2s;

            @media screen and (max-width: 999px) {
                padding: 3vw;
                margin-left: 4vw;

                font-size: 4vw;
                line-height: 100%;
            }

            &:hover {
                cursor: pointer;

                color: #fff;
                border: 0.104vw solid #0076C0;
                background-color: #0076C0;
            }
        }

        .buttons__delete {
            border-color: #f95959;

            &:hover {
                color: #fff;
                border: 0.104vw solid #f95959;
                background-color: #f95959;
            }
        }
    }
}
</style>