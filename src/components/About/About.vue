<template>
    <div>
        <div class="left">
        <h2 align="center">About us</h2>
            <div>
                This website is developed by:
                <ul class="list-group">
                    <li class="list-group-item">
                        Muhammadjon Hakimov (@MrHakimov)
                    </li>
                    <li class="list-group-item">
                        Amirjon Qodirov (@AmirjonQodirov)
                    </li>
                    <li class="list-group-item">
                        Behruz Mansurov (@MansurovB-source)
                    </li>
                </ul>
            </div>
            <div>
                <br>If something goes wrong, if you find any mistakes or if you have any advices, business offers or appreciation,
                you can email us at
            <ul class="list-group">
                <li class="list-group-item">
                    hakimov0777@gmail.com
                </li>
                <li class="list-group-item">
                    amirjonqodirov8383@gmail.com
                </li>
                <li class="list-group-item">
                    bekha.m2000.bm@gmail.com
                </li>
            </ul>
            </div>
        </div>
        <div class="right">
            <img width="300px" src="../../assets/ad.jpg" alt="ad">
        </div>

    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

    @media screen and (min-width: 801px){
        .left{
            width: 60%;
            border-radius: 8px;
            padding: 6px;
            float: left;
            background-color: #e0e0e0;
            margin: 2%;
        }
        .right{
        }
        img{
            margin-top: 2%;

            border-radius: 24px;
            width: 33%;
            height: 33% ;
        }
    }
    @media screen and (max-width: 800px){
        .left{
            border-radius: 8px;
            padding: 6px;
            float: left;

            /*text-align: center;*/
            /*box-shadow: 0 0 40px 0 #0098fe;*/
            background-color: #e0e0e0;
            margin: 11px;


        }
        .right{
            margin-left: 25%;
            margin-right: 25%;

            /*-webkit-box-shadow: 0px 0px 56px 0px rgb(43, 163, 255);*/
        }
        img{
            border-radius: 24px;

            width: 100%;
            height: 100%;
        }
    }


</style>