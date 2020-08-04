<template>
    <div>
        <div class="tag">
            <p>#{{tags}} <button class="btn-x btn btn-outline-danger" @click="removeFromList">x</button> </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tag",
        props: {
            tags:{
                type: String,
                default() {
                    return ""
                }
            }
        },
        methods: {
            removeFromList(){
                this.$emit("removeFromList")
            },
        },
    }
</script>

<style scoped>
    div.tag {
        box-shadow: 0 0 2px 0 #ffffff;
        padding: 20px;
        margin-bottom: 20px;
    }
</style>