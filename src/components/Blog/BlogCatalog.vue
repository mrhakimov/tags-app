<template>
    <div class="blogPage">
        <br/>
        <h1 align="center">
            Blogs
        </h1>

        <div class="top">
            <span class="topTags-l">
                <router-link :to="{name: 'top_tik_tok'}">
                    <img src="..\..\assets\tiktok.jpg" class="top_img" alt="topTikTok" />
                    <p style="color: white">Top 10 tags</p>
                </router-link>
            </span>
            <span class="topTags">
                <router-link :to="{name: 'top_instagram'}">
                    <img src="..\..\assets\topInstagram.jpg" class="top_img" alt="topTikTok" />
                    <p style=" color: white">Top 100 tags</p>
                </router-link>
            </span>
            <span class="topTags-r">
                <router-link :to="{name: 'blogs'}">
                    <img src="..\..\assets\qq.png" class="top_img" alt="topTikTok" />
                    <p style="color: black">More Tags</p>
                </router-link>
            </span>

        </div>

        <br/>

    </div>
</template>

<script>
    export default {
        name: "BlogCatalog"
    }
</script>

<style scoped>
    @media screen and (min-width: 601px) {
        .topTags-l {
            margin-left: 2%;
            margin-right: 1%;
            position: relative;
            color: #ffffff;
        }
        .topTags-r {
            margin-right: 1%;
            margin-left: 1%;
            position: relative;
            color: #ffffff;
        }
        .topTags {
            position: relative;
            color: #ffffff;
        }

        .top_img {
            border-radius: 16px;
            width: 31%;
            filter: blur(2px);
            height: 33%;
        }

        p {
            font-size: 2rem;
            position: absolute;
            margin-right: 5px;
            top: 100%;
            bottom: 0;
            right: 0;
        }
    }
    @media screen and (max-width: 600px) {
        .topTags-l {
            margin-left: 2%;
            margin-right: 1%;
            position: relative;
            color: #ffffff;
        }
        .topTags-r {
            margin-right: 1%;
            margin-left: 2%;
            position: relative;
            color: #ffffff;
        }
        .topTags {
            margin: 2%;
            position: relative;
            color: #ffffff;
        }

        .top_img {
            border-radius: 16px;
            width: 95%;
            filter: blur(2px);
            height: 33%;
        }

        p {
            font-size: 2rem;
            position: absolute;
            margin-right: 5px;
            top: 100%;
            bottom: 0;
            right: 0;
        }
    }

</style>