<template>
    <div>
        <router-link :to="{name: 'main'}">
            <div class='btn'>Назад</div>
        </router-link>
        <br/>
        <br/>

        <h1>Instagram</h1>
        <br/>
        <form v-on:submit.prevent="submit">
            <br/>
            <div class="check_box">
                Гапча мемонидми ако?
                <input type="checkbox" id="checkbox" v-model="check"/>
            </div>

            <br/>

            <br/>
            Гапча:
            <div v-if="check">
                <textarea id="text-area" v-model="text">{text}</textarea>
            </div>
            <br/>

            <div class="radio_button" v-if="check">
                Хештегоя гапчатонки буроримми ако?
                <br/>
                <input type="radio" id="yes" value="true" v-model="withPost" >
                <label for="yes">Да</label>
                <br/>
                <input type="radio" id="no" value="false" v-model="withPost">
                <label for="no">Нет</label>
            </div>
            <br/>
            <br/>
            <div class="div_name">
                <label>Введите ..hashtag#..:</label>
                <div class="input_str">
                    <input class="str" type="text" id="str" autocomplete="off">
                </div>
            </div>
            <br/>

            <div class="div_button">
                <input class="button" type="submit" value="Готово">
            </div>

        </form>
    </div>
</template>

<script>
    export default {

        name: "Instagram",
        data() {
            return {
                check: false,
                withPost: "true",
                text: "",

            }
        },
        methods: {

            submit() {
                let tag = document.getElementById('str').value
                let count = this.text.length;
                if (!this.check) {
                    count = 0;
                }
                console.log(count)

                this.$axios({
                    method: 'post',
                    url: 'http://192.168.1.17:9999/tag',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    data: {tag: tag, count: count, platform: "Instagram"}
                }).then(response => {
                        console.log(response.data);
                    }
                );
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

</style>