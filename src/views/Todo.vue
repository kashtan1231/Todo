<template lang="pug">
.todo
    .todo__fog(v-if="isPopUpShow")
        PopUp.todo__pop-up(@close="onClose" @confirm="onConfirm" @delete="onDelete" :taskProp="task")
    .todo__bg
    .todo__logo
    .todo__list-box
        .list-box__text Thank you, {{profile.name}}!
        .list-box__list
            button.list__add(@click="addTask()") add task
            button.list__task(v-for="(task, i) in tasks" :key="i" @click="editTask(task, i)") {{task.title}}
</template>

<script>
import PopUp from '../components/PopUp.vue'

export default {
    created() {
        if(!this.profile.isLogged) {
            window.location.href = 'http://localhost:8080/#/login'
        }
    },

    data:() => ({
        profile: JSON.parse(localStorage.getItem('profile')),
        isPopUpShow: false,
        isAddTask: false,
        tasks: [],
        task: {},
        selectedTask: null
    }),

    methods: {
        popUp() {
            this.isPopUpShow = !this.isPopUpShow
        },

        onConfirm(data) {
            if (this.selectedTask !== null) {
                const index = this.selectedTask
                this.tasks[index] = data
                this.selectedTask = null
                this.popUp()
                return
            }
            this.tasks.push(data)
            this.popUp()
        },

        onClose() {
            this.selectedTask = null
            this.popUp()
        },

        onDelete() {
            this.tasks.splice(this.selectedTask, 1)
            this.popUp()
        },

        editTask(data, i) {
            this.task = data
            this.selectedTask = i;
            this.popUp()
        },

        addTask() {
            this.task = {title: "", desc: ""}
            this.popUp()
        }
    },

    components: {
        PopUp
    }
}
</script>

<style lang="scss" scoped>
.todo {
    position: relative;

    padding: 3.385vw 19.688vw 8.854vw 18.281vw;
    background-color: #E5E5E5;

    @media screen and (max-width: 999px) {
        padding: 10vw 20vw;
    }

    &__bg {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 41.510vw;

        background-image: linear-gradient(180deg, #00AFED 0%, #00569A 100%);

        @media screen and (max-width: 999px) {
            height: 100%;
        }
    }

    &__logo {
        position: relative;
        width: 9.688vw;
        height: 6.198vw;
        margin: auto;

        background-image: url(../assets/logo.svg);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        @media screen and (max-width: 999px) {
            width: 15vw;
            height: 9vw;
        }
    }

    &__list-box {
        position: relative;
        width: 100%;
        min-height: 34.375vw;

        padding: 2.667vw;
        margin-top: 3.438vw;
        background-color: #fff;

        @media screen and (max-width: 999px) {
            min-height: 100vw;
            margin-top: 10vw;
            padding: 5vw;

            width: calc(100% - 10vw);
        }

        .list-box__text {
            margin-bottom: 2vw;
            font-weight: 700;
            font-size: 3.125vw;
            line-height: 156.69%;
            text-align: center;

            @media screen and (max-width: 999px) {
                font-size: 4vw;
                margin-bottom: 5vw;
            }
        }

        .list-box__list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2.083vw;

            @media screen and (max-width: 999px) {
                grid-template-columns: 1fr;
                grid-gap: 4vw;
            }

            .list__add, .list__task {
                border: 0.052vw solid #0076C0;
                background-color: #F6F6F6;
                transition-duration: .2s;
                text-align: center;
                align-items: center;
                align-content: center;
                padding: 1.365vw;

                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 1.042vw;

                box-shadow: 0.104vw 0.104vw 0.281vw rgba(0, 0, 0, 0.1);

                @media screen and (max-width: 999px) {
                    padding: 4vw;
                    font-size: 3vw;

                    box-shadow: 0.504vw 0.504vw 1.81vw rgba(0, 0, 0, 0.1);
                }

                &:hover {
                    cursor: pointer;
                    padding: 0.917vw;
                    border: 0.5vw solid #0076C0;

                    @media screen and (max-width: 999px) {
                        padding: 1.365vw;
                        border: 0.052vw solid #0076C0;
                    }
                }
            }

        }
    }

    &__pop-up {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    &__fog {
        position: fixed;
        z-index: 10;
        background-color: #3d3d3d88;
        top: 0;
        left: 0;
        width: 100%;
        height: 1000px;
    }
}
</style>