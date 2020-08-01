<template>
    <form v-on:submit.prevent="submit">
        <div class="div_name">
            <label >Введите ..hashtag#..:</label>
            <div class="input_name">
                <input class="textbox" type="text" id="name" autocomplete="off">
            </div>
        </div>
        <br/>

        <div class="div_button">
            <input class="button" type="submit" value="Готово">
        </div>
    </form>
</template>

<script>

    export default {
        name: "Main",
        methods: {
            submit(){
                let name = document.getElementById('name').value
                let phone = document.getElementById('phone').value
                let address = document.getElementById('address').value
                let mail = document.getElementById('mail').value
                let price = this.cartTotalCost
                let foods = [];
                if (this.BASKET.length) {
                    for (let item of this.BASKET) {
                        foods.push(item.article + "*" + item.quantity);
                    }
                }

                this.$axios({
                    method: 'post',
                    url: 'http://localhost:12888/order',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    data: {name: name, phone: phone, address: address,mail: mail, price: price, foods: String(foods)}
                }).then(response => {
                        alert(response.data);
                        this.clearBasket();
                        this.$router.push('/');
                    }
                );

            }

        }


    }
</script>

<style scoped>

</style>