<template>
    <div class="bg-white">
        <h1>Top 10 TikTok hashtags</h1>
        <p>
            Top 10 Hashtags on Tiktok with the total number of views and posts on Tiktok. We are trying the best to
            update the database with pupular and trending hashtags with our algorithm. Tap on the Tiktok to view
            more related famous hashtags to let your next post a boost.
        </p>
        <div class="table">
            <b-table class="btbl" striped hover :items ="dataTikTok"></b-table>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TopTikTok",
        data() {
            return {
                dataTikTok: [
                    {'#':1, Tag: '#foryou', totalNumberOfViews: '1.898T'},
                    {'#':2, Tag: '#foryoupage', totalNumberOfViews: '1.097T'},
                    {'#':3, Tag: '#fyp', totalNumberOfViews: '1.025T'},
                    {'#':4, Tag: '#duet', totalNumberOfViews: '880.1B'},
                    {'#':5, Tag: '#tiktok', totalNumberOfViews: '558.7B'},
                    {'#':6, Tag: '#viral', totalNumberOfViews: '450.6B'},
                    {'#':7, Tag: '#tiktokindia', totalNumberOfViews: '369.6B'},
                    {'#':8, Tag: '#trending', totalNumberOfViews: '346.7B'},
                    {'#':9, Tag: '#comedy', totalNumberOfViews: '299.7B'},
                    {'#':10, Tag: '#funny', totalNumberOfViews: '213.4B'},
                ]
            }
        }
    }
</script>

<style scoped>


    div.table {
        width: 75%;
        margin: 12px;
        padding: 12px;
    }
    .btbl{
        color: #003aad;
    }
</style>