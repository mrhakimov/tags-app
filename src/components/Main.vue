<template>
    <div class="main">
        <div align="center" class="content">
            <br>
            <div class="description">
                <img src="..\assets\logo3.png" alt="TikSta" width="300px"/>
                <p>
                    TikSta is a smart application which will help you to choose the best hashtags for your posts even
                    considering the limits set by TikTok and Instagram for the length of the post and, of course, the
                    length of your post if you paste it.
                </p>
            </div>
            <br>
            <div class="postPages">
                <span class="tikTokButton">
                    <router-link :to="{name: 'tik_tok'}">
                        <img src="..\assets\logo_tiktok.svg" alt="logoInst">
                    </router-link>
                </span>
                <span class="instagramButton">
                    <router-link :to="{name: 'instagram'}">
                        <img src="..\assets\logo_instagram.svg" alt="logoInst">
                    </router-link>
                </span>
            </div>
            <br/>
            <div class="description-b">
                <p>
                    We also run a blog, where we post some interesting advices on how to run and promote your
                    TikTok and Instagram accounts. There you can find hashtags for different topics or top trending
                    and most posted and viewed hashtags.<br/><router-link :to="{name: 'blogCatalog'}">Go to blog >>></router-link>
                </p>
            </div>
            <br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods: {
        }
    }
</script>

<style>
    div.description{
        border-radius: 13px;
        margin-left: 8px;
        margin-right: 8px;
        padding: 8px;
        background: #f3f3f3;
        -webkit-box-shadow: 0px 0px 56px 0px rgb(43, 163, 255);
    }
    div.description-b{
        border-radius: 13px;
        margin-left: 10%;
        margin-right: 10%;
        padding: 8px;
        background: #f3f3f3;
        -webkit-box-shadow: 0px 0px 56px 0px rgb(43, 163, 255);
    }

    @media screen and (min-width: 501px){
        .postPages img{
            width: 200px;
            height: 200px;
        }
    }
    @media screen and (max-width: 500px){
        .postPages img{
            width: 150px;
            height: 150px;
        }
    }
    .instagramButton{
        margin: 2%;
    }
    .tikTokButton{
        margin: 2%;
    }

</style>