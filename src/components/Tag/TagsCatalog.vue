<template>
    <div class="block">
        <br/>
        <h1 align="center">Tags</h1>
        <p v-if="!TAGS.length">...</p>
        <div class="list">
            <Tag
                    v-for="(tags,index) in TAGS"
                    :key="tags"
                    :tags="tags"
                    @removeFromList="removeFromList(index)"
            />
        </div>

    </div>
</template>

<script>
    import Tag from "./Tag";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "TagsCatalog",
        components: {Tag},
        computed: {
            ...mapGetters([
                'TAGS',
            ]),


        },
        methods: {
            ...mapActions([
                'REMOVE_FROM_TAGS',
            ]),
            removeFromList(index){
                this.REMOVE_FROM_TAGS(index);
            },


        }
    }
</script>

<style>

    div.block {
        color: white;
        padding: 36px;
        margin: 36px;
        box-shadow: 0 0 24px 0 #c12146;
        background-color: black;

    }
    div.list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>