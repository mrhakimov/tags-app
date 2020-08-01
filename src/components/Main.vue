<template>
    <div class="main">
        <div class="header">
            <router-link :to="{name: 'instagram'}">
                <div class="btn btn-dark" >Instagram</div>
            </router-link>
            <router-link :to="{name: 'tik_tok'}">
                <div class="btn btn-info" >Tik Tok</div>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Main",
        methods: {


        }


    }
</script>

<style >

    div.header {
        padding: 12.5%;
        width: 100%; /* Full-width */
        /*height: 100px;*/
        /*background-color: #555; !* Dark-grey background *!*/
        /*overflow: auto; !* Overflow due to float *!*/
    }

    .header div {
        /*float: left; !* Float links side by side *!*/
        width: 50%; /* Equal width (5 icons with 20% width each = 100%) */
        /*height: 100px;*/
        /*text-align: center; !* Center-align text *!*/
        /*color: white; !* White text color *!*/
        /*font-size: 50px; !* Increased font size *!*/
    }

</style>