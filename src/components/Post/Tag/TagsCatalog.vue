<template>
    <div class="block" v-if="this.TAGS.length">
        <h1 align="center">Tags</h1>
        <br>
        <p v-if="!this.TAGS.length">...</p>
        <div class="list">
            <Tag
                    v-for="(tags,index) in this.TAGS"
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
        props: {
            text: {
                type: String,
                default() {
                    return ""
                }
            },
            withPost: {
                type: Boolean,
                default() {
                    return "true"
                }
            },
            check: {
                type: Boolean,
                default(){
                    return false;
                }
            }

        },
        computed: {
            ...mapGetters([
                'TAGS',
            ]),
        },
        methods: {
            ...mapActions([
                'REMOVE_FROM_TAGS',
                'CHANGE_RESULT'
            ]),
            changeResult() {
                if (!this.withPost) {
                    this.CHANGE_RESULT("");
                } else {
                    this.CHANGE_RESULT(this.text);
                }
            },
            removeFromList(index) {
                this.REMOVE_FROM_TAGS(index);
                this.changeResult();

                if (!this.TAGS.length && (!this.check || !this.withPost)) {
                    this.$notify({
                        group: 'foo',
                        type: 'warn',
                        title: 'The result get empty!',
                        duration: 5000,
                        speed: 1000,
                        data: {}
                    })
                }
            }
        }
    }
</script>

<style>
    div.block {
        color: black;
        padding: 36px;
        margin: 36px;
        border-radius: 12px;
        box-shadow: 0 0 24px 0 #136cba;
        background-color: #f3f3f3;

    }

    div.list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>