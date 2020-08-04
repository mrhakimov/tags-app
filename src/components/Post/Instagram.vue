<template>
    <div>
        <br/>
        <h1 align="center">Instagram</h1>
        <br/>
        <form v-on:submit.prevent="submit">
            <br/>
            <div class="check_box">
                Хотите, чтобы мы учли длину Вашего поста?
                <input type="checkbox" id="checkbox" v-model="check"/>
            </div>

            <br/>
            <div v-if="check">
                <br/>
                Ваш пост:
                <div>
                    <textarea @change.prevent="changeResult" id="text-area" v-model="text"
                              required>{text}</textarea>
                </div>
                <br/>

                <div class="radio_button">
                    Вывести хештеги вместе с постом?
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
                <label>Введите хештег&#47;тему вашего поста:</label>
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
                    :check="check"
            />
        </div>

        <div v-if="this.TAGS.length || (withPost==='true' && check)" class="div-result">
            <textarea id="result" class="result" v-model="this.RESULT" readonly>{this.RESULT}</textarea>
        </div>

        <div v-if="this.TAGS.length || (withPost==='true' && check)">
            <input type="hidden" id="testing-code" :value="this.RESULT">
            <input class="btn btn-outline" type="button" value="Скопировать" @click="copyToBuffer">
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
                withPost: "true",
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
                    let successful = document.execCommand('copy');

                    if (successful) {
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'Результат скопирован в буфер обмена!',
                            duration: 5000,
                            speed: 1000,
                            data: {}
                        })
                    } else {
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Не удалось скопировать в буфер обмена!',
                            duration: 5000,
                            speed: 1000,
                            data: {}
                        })
                    }
                } catch (err) {
                    this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'Не удалось скопировать в буфер обмена!',
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
                if (this.text !== "" && this.withPost === 'true'){
                    this.isReady = true;
                }
                this.$axios({
                    method: 'post',
                    url: 'http://localhost:9999/tag',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    data: {tag: tag, count: count, platform: "Instagram"}
                }).then(response => {
                    if(response.data === ''){
                        this.answer = false;
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Не удалось найти похожие хештеги!',
                            duration: 5000,
                            speed: 1000,
                            data: {}
                        })
                    }else{
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