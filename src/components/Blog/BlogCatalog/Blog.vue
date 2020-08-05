<template>
    <div class="blogItem">
        <h1>{{name}}</h1>
        <p>
            {{description}}
        </p>
        <div class="table">
            <b-btn @click="info" class="">
                Info

            </b-btn>
        </div>


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
            description: {
                type: String,
                default() {
                    return "";
                }
            },
            name: {
                type: String,
                default() {
                    return "";
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
    .blogItem {
        border-radius: 12px;
        margin: 1rem  12%;
        flex-basis: 25%;
        box-shadow: 0 0 80px 0 #0098fe;
        padding: 16px;
        /*margin-bottom: 16px;*/
    }
</style>