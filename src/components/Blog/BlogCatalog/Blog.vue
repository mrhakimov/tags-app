<template>
    <div align="center" class="blogItem">
        <h1>{{name}}</h1>
        <div>
            <b-btn @click="info" class="" v-if="show">
                Collapse
            </b-btn>
            <b-btn @click="info" class="" v-if="!show">
                Expand
            </b-btn>
        </div>
        <br>
        <transition name="fade">
            <div class="table" v-if="show">
                <b-table striped hover class="btbl" :items="tags"></b-table>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        props: {
            tags:{
                type: Array,
                default() {
                    return[]
                }
            },
            name: {
                type: String,
                default() {
                    return "";
                }
            },
            show: {
                type: Boolean,
                default(){
                    return false;
                }
            }
        },
        methods: {
            info() {
                this.$emit('info', this.name)
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 600px){
        .blogItem {
            margin: 0.5rem  5%;
        }
    }
    @media screen and (min-width: 601px){
        .blogItem {
            margin: 0.5rem  20%;
        }
    }
    .blogItem {
        border-radius: 12px;
        /*padding: 0.5rem 10%;*/
        /*flex-basis: 25%;*/
        box-shadow: 0 0 40px 0 #0098fe;
        padding: 16px;
        /*margin-bottom: 16px;*/
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 10%;
    }

    @media screen and (min-width: 801px){
        div.table {
            width: 60%;
        }
    }
    @media screen and (max-width: 800px){
        div.table {
            margin-right: 5%;
            width: 60%;
        }
    }
    @media screen and (max-width: 600px){
        div.table {
            margin-right: 5%;
            width: 40%;
        }
    }
    @media screen and (max-width: 430px){
        div.table {
            margin-right: 50%;
            width: 10%;
        }
    }
    @media screen and (max-width: 395px){
        div.table {
            margin-right: 60%;
            width: 10%;
        }
    }
    @media screen and (max-width: 350px){
        div.table {
            margin-right: 70%;
            width: 10%;
        }
    }

    .btbl{

        align-self: center;
        color: #003aad;
    }


</style>