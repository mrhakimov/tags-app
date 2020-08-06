<template>
    <div class='blog-page' align="center">
        <h1>{{blog.name}}</h1>

        <div class="table">
            <b-table striped hover class="btbl" :items="blog.tags"></b-table>
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
    @media screen and (max-width: 400px){
        div.table {
            width: 50%;
            margin-right: 12.5%;
        }
    }

    @media screen and (min-width: 401px){
        div.table {
            width: 50%;
        }
    }
    .btbl{
        align-self: center;
        color: #003aad;
    }

    div.content{
        padding-left: 12.5%;
        padding-right: 12.5%;
    }
</style>