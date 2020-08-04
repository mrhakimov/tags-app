<template>
    <div class='blog-page'>

        <h1>{{blog.name}}</h1>
        <p>
            {{blog.description}}
        </p>
        <div class="table">
            <b-table striped hover :items="blog.tags"></b-table>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "BlogPage",
        computed: {
            ...mapGetters([
                'BLOG_TAGS'
            ]),
            blog() {
                let result = {}
                let vm = this;
                this.BLOG_TAGS.find(function (item) {
                    if (item.name === vm.$route.query.blog) {
                        result = item;
                    }
                })
                return result;
            }
        },
    }
</script>

<style scoped>

</style>