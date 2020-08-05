<template>
    <div>
        <br>
        <Blog class="div_blog"
                v-for="(blog_tags) in this.BLOG_TAGS"
                :key="blog_tags.name"
                :name="blog_tags.name"
                :description = "blog_tags.description"
                :tags="blog_tags.tags"
                @info="info"
        />
    </div>
</template>

<script>
    import Blog from "./Blog";
    import {mapGetters} from "vuex";
    export default {
        name: "Blogs",
        components: {Blog},
        computed: {
            ...mapGetters([
                'BLOG_TAGS',
            ]),
        },
        methods: {
            info(name){
                this.$router.push( {name: 'blog', query: { 'blog': name }})
            }
        }
    }
</script>

<style scoped>

</style>