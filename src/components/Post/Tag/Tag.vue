<template>
    <div>
        <div class="tag">
            <p>#{{tags}}<button class="btn-x btn btn-outline-info button" @click="removeFromList">X</button> </p>
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
        padding: 2px 2px 0;
        box-shadow: 0 0 2px 0 #1172bd;
        border-radius: 8px;
        /*padding: 12px;*/
        /*margin-bottom: 12px;*/
        margin-right: 8px;
    }
    button.button{

        margin: 2px;
        padding: 0px 2px;
    }
</style>