<template>
    <div>
        <br>
        <Blog
                v-for="(blog_tags, index) in this.BLOG_TAGS"
                :key="blog_tags.name"
                :name="blog_tags.name"
                :tags="blog_tags.tags"
                :show="blog_tags.show"
                @info="info(index)"
        />
    </div>
</template>

<script>
    import Blog from "./Blog";
    import {mapGetters} from "vuex";
    export default {
        name: "Blogs",
        data() {
            return{
            }
        },
        components: {Blog},
        computed: {
            ...mapGetters([
                'BLOG_TAGS',
            ]),
        },
        methods: {
            info(index){
                for (let ind in this.BLOG_TAGS){
                    if (ind !== String(index)) {
                        this.BLOG_TAGS[ind].show = false;
                    }
                }
                this.BLOG_TAGS[index].show = !this.BLOG_TAGS[index].show
            }
        }
    }
</script>

<style scoped>

</style>