<template>
    <div id="app" class="id">
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item href="/">
                    <img src="./assets/q.png" width="32px" alt="logo">
                    Home
                </b-nav-item>
                <b-nav-item-dropdown text="Create Post" right>
                    <b-dropdown-item href="/instagram">Instagram</b-dropdown-item>
                    <b-dropdown-item href="/tik_tok">TikTok</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="/blog_catalog">Blog</b-nav-item>
                <b-nav-item href="/about">About</b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <keep-alive>
            <router-view>
            </router-view>
        </keep-alive>
        <div class="footer">
<!--            <p align="center">Copyright &copy; 2020</p>-->
            <notifications group="foo"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        computed: {}
    }
</script>

<style>


</style>
