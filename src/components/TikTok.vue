<template>
    <div>
        <router-link :to="{name: 'main'}">
            <div class='btn'>Назад</div>
        </router-link>
        <br/>
        <br/>

        <h1>TikTok</h1>
        <br/>
        <form v-on:submit.prevent="submit">
            <br/>
            <div class="check_box">
                Гапча мемонидми ако?
                <input type="checkbox" id="checkbox" v-model="check"/>
            </div>

            <br/>
            <div v-if="check">
                <br/>
                Гапча:
                <div>
                    <textarea @change.prevent="changeResult" id="text-area" v-model="text"
                              required>{text}</textarea>
                </div>
                <br/>

                <div class="radio_button">
                    Хештегоя гапчатонки буроримми ако?
                    <br/>
                    <input type="radio" id="yes" value="true" v-model="withPost" @change.prevent="changeResult">
                    <label for="yes">Да</label>
                    <br/>
                    <input type="radio" id="no" value="false" v-model="withPost" @change.prevent="changeResult">
                    <label for="no">Нет</label>
                </div>
                <br/>
                <br/>
            </div>
            <div class="div_tag">
                <label>Введите Hashtag :</label>
                <div class="input_str">
                    <input class="str" type="text" id="str" autocomplete="off">
                </div>
            </div>
            <br/>
            <div class="div_button">
                <input class="button" type="submit" value="Готово">
            </div>
        </form>

        <div v-if="answer">
            <TagsCatalog
                    :text=text
                    :withPost=withPost
            />
        </div>

        <div v-if="isReady" class="div-result">
            <textarea id="result" class="result" v-model="this.RESULT" readonly>{this.RESULT}</textarea>
        </div>

        <div>
            <input type="hidden" id="testing-code" :value="this.RESULT">
            <input class="btn btn-outline" type="button" value="Таёр кун бача" @click="copyToBuffer">
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import TagsCatalog from "./Tag/TagsCatalog";

    export default {
        name: "TikTok",
        components: {TagsCatalog},
        computed: {
            ...mapGetters([
                'TAGS', 'RESULT'
            ]),
        },
        data() {
            return {
                check: false,
                withPost: "true",
                text: "",
                answer: false,
                isReady: false,
            }
        },
        methods: {
            ...mapActions([
                'GET_TAGS_FROM_API',
                'CHANGE_RESULT'
            ]),
            changeResult() {
                if (this.withPost === "false") {
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
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'successful' : 'unsuccessful';
                    alert('Testing code was copied ' + msg);
                } catch (err) {
                    alert('Oops, unable to copy');
                }

                /* unselects the range */
                testingCodeToCopy.setAttribute('type', 'hidden')
                window.getSelection().removeAllRanges()
            },
            submit() {
                this.isReady = true;
                
                let tag = document.getElementById('str').value
                let count = this.text.length;
                
                if (!this.check) {
                    count = 0;
                }

                this.$axios({
                    method: 'post',
                    url: 'http://192.168.1.17:9999/tag',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    data: {tag: tag, count: count, platform: "TikTok"}
                }).then(response => {
                    this.answer = true;
                    this.setList(response.data)
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
        padding: 40px;
        border-radius: 5px;
        background: RGBA(255, 255, 255, 1);
        -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .45);
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .45);
    }

    /* Стили полей ввода */
    .textbox {
        height: 50px;
        width: 100%;
        border-radius: 3px;
        border: rgba(0, 0, 0, .3) 2px solid;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 30px;
    }

    .message:focus,
    .textbox:focus {
        outline: none;
        border: rgba(24, 149, 215, 1) 2px solid;
        color: rgba(24, 149, 215, 1);
    }

    /* Стили текстового поля */
    .message {
        background: rgba(255, 255, 255, 0.4);
        width: 100%;
        height: 120px;
        border: rgba(0, 0, 0, .3) 2px solid;
        box-sizing: border-box;
        -moz-border-radius: 3px;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        display: block;
        padding: 10px;
        margin-bottom: 30px;
        overflow: hidden;
    }

    /* Базовые стили кнопки */
    .button {
        height: 50px;
        width: 100%;
        border-radius: 3px;
        border: rgba(0, 0, 0, .3) 0px solid;
        box-sizing: border-box;
        padding: 10px;
        background: #90c843;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16pt;
        transition: background .4s;
        cursor: pointer;
    }

    /* Изменение фона кнопки при наведении */
    .button:hover {
        background: #80b438;
    }

    div.div-result {
        margin: 12px;
        padding: 24px;
    }

    .result {
        width: 75%;
        height: 500px;
    }
</style>