<template>
    <div>
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

</style>