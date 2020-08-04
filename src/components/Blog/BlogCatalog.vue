<template>
    <div class="header">
        <router-link :to="{name: 'top_tik_tok'}">
            <div class="btn btn-danger" >Top Tik Tok</div>
        </router-link>
        <router-link :to="{name: 'top_instagram'}">
            <div class="btn btn-success" >Top Instagram</div>
        </router-link>
        <router-link :to="{name: 'blogs'}">
            <div class="btn btn-light" >Blogs</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "BlogCatalog"
    }
</script>

<style scoped>

</style>