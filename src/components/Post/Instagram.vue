<template>
    <div>
        <br/>
        <h1 align="center" style="font-family: 'Comic Sans MS'">Instagram</h1>
        <br/>
        <b-form v-on:submit.prevent="submit">
            <br/>
            <div class="check_box my-buttons">
                Want us to consider the length of your post in our calculations?
                <b-form-checkbox type="checkbox" id="checkbox" v-model="check" switch/>
            </div>
            <br/>
            <div v-if="check">
                <div>
                    <b-textarea @change="changeResult" id="text-area" placeholder="Your post here.." v-model="text"
                              required>{text}</b-textarea>
                </div>
                <br/>
                <div class="check_box">
                    Display post along hashtags?
                    <b-form-checkbox type="checkbox" v-model="withPost" switch/>
                </div>
            </div>
            <br/>
            <div class="div_tag">
                <div class="input_str">
                    <b-form-input class="str" type="text" id="str" autocomplete="off" required placeholder="hashtag/theme here..."/>
                </div>
            </div>
            <br/>
            <div class="div_button">
                <input class="button" type="submit" value="Submit">
            </div>
        </b-form>

        <div v-if="answer">
            <TagsCatalog
                    :text=text
                    :withPost=withPost
                    :check="check"
            />
        </div>

        <div v-if="(this.TAGS.length || (withPost && check)) && this.RESULT.length">
            <b-textarea id="result" class="result" v-model="this.RESULT" readonly>{this.RESULT}</b-textarea>
            <input type="hidden" id="testing-code" :value="this.RESULT">
            <div class="done"><button class="done_btn" @click="copyToBuffer" >copy</button></div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import TagsCatalog from "./Tag/TagsCatalog";

    export default {
        name: "Instagram",
        components: {TagsCatalog},
        computed: {
            ...mapGetters([
                'TAGS', 'RESULT'
            ]),
        },
        data() {
            return {
                check: false,
                withPost: true,
                text: "",
                answer: false,
                isReady: false,
            }
        },
        methods: {
            ...mapActions([
                'GET_TAGS_FROM_API',
                'CHANGE_RESULT',
                'CLEAR'
            ]),
            changeResult() {
                if (!this.withPost) {
                    this.CHANGE_RESULT("");
                } else {
                    this.CHANGE_RESULT(this.text);
                }
            },
            setList(data) {
                this.GET_TAGS_FROM_API(data)
            },
            copyToBuffer() {
                let testingCodeToCopy = document.querySelector('#testing-code')
                testingCodeToCopy.setAttribute('type', 'text')
                testingCodeToCopy.select()
                try {
                    let successful = document.execCommand('copy');

                    if (successful) {
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'The result is copied to clipboard!',
                            duration: 5000,
                            speed: 1000,
                            data: {}
                        })
                    } else {
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Couldn\'t copy result to the clipboard!',
                            duration: 5000,
                            speed: 1000,
                            data: {}
                        })
                    }
                } catch (err) {
                    this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'Couldn\'t copy result to the clipboard!',
                        duration: 5000,
                        speed: 1000,
                        data: {}
                    })
                }

                /* unselects the range */
                testingCodeToCopy.setAttribute('type', 'hidden')
                window.getSelection().removeAllRanges()
            },
            submit() {
                this.CLEAR();
                let tag = document.getElementById('str').value
                let count = this.text.length;

                if (!this.check) {
                    count = 0;
                }
                if (this.text !== "" && this.withPost) {
                    this.isReady = true;
                }
                this.$axios({
                    method: 'post',
                    url: '/tag',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    data: {tag: tag, count: count, platform: "Instagram"}
                }).then(response => {
                    if (response.data === '') {
                        this.answer = false;
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'No hashtags found!',
                            duration: 5000,
                            speed: 1000,
                            data: {}
                        })
                    } else {
                        this.isReady = true;
                        this.answer = true;
                        this.setList(response.data)
                    }
                    this.changeResult()
                });

            }
        }
    }
</script>

<style scoped>
    /* Базовые стили формы */
    form {
        margin: 0 auto;
        max-width: 95%;
        box-sizing: border-box;
        padding: 4%;
        color: #000000;/*rgb(154,157,160);*/
        /*border: 0.0001px solid #000000;*/
        border-radius: 12px;
        background: #f3f3f3;
        -webkit-box-shadow: 0px 0px 56px 0px rgb(43, 163, 299);

        /*-webkit-box-shadow: 0px 0px 10px 0px rgb(103, 245, 2);*/
        /*box-shadow: 0px 0px 50px 0px rgb(103, 245, 2);*/
        /*-webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);*/
        /*box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .45);*/
    }

    /* Базовые стили кнопки */
    .button {
        height: 50px;
        width: 100%;
        border-radius: 3px;
        border: rgba(0, 0, 0, 0.3) 0px solid;
        box-sizing: border-box;
        padding: 10px;
        background-color: rgb(43, 163, 299);

        /*background: #90c843;*/
        color: #f3f3f3;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16pt;
        transition: background .4s;
        cursor: pointer;
    }

    /* Изменение фона кнопки при наведении */
    .button:hover {
        background-color: rgb(11, 52, 173);

        /*background: #80b438;*/
    }



    .result {
        border-radius: 12px;
        margin: 12% 12% 0;
        padding: 12%;
        -webkit-box-shadow: 0px 0px 33px 0px rgb(43, 163, 299);
        width: 75%;
        height: 500px;
    }
    div.done{

        border-radius: 12px;
        border: #000;

        margin-top: 16px;
        width: 48px;
        max-width: 42px;
        /*width: 3rem;*/
        margin-right: 12.5% ;
        margin-left: calc(87.5% - 42px);
        color: black;
    }

    .done_btn {
        padding: 2px;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: gray;
        background: white;
        /*background-color: rgb(43, 163, 299);*/
        border: 2px solid gray;
        border-radius: 6px;
    }

    .done_btn:hover {
        color: white;
        background: gray;
        /*background-color: rgb(11, 52, 173);*/
    }

</style>