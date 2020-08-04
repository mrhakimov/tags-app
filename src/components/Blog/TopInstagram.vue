<template>
    <div class="bg-white">
        <h1>Top 100 HashTags on Instagram</h1>
        <p>
            Top 100 Hashtags on Instagram with the total number of posting on Instagram. We are trying the best to
            update the database with pupular and trending hashtags with our algorithm. Tap on the Hashtags to view
            more related famous hashtags to let your next post a boost.
        </p>
        <div class="table">
            <b-table striped hover :items="dataInstagram"></b-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopInstagram",
        data() {
            return {
                dataInstagram: [
                    {'#': 1, Tag: '#love', totalNumberOfViews: '1.835B'},
                    {'#': 2, Tag: '#instagood', totalNumberOfViews: '1.150B'},
                    {'#': 3, Tag: '#fashion', totalNumberOfViews: '812.7M'},
                    {'#': 4, Tag: '#photooftheday', totalNumberOfViews: '797.3M'},
                    {'#': 5, Tag: '#beautiful', totalNumberOfViews: '661.0M'},
                    {'#': 6, Tag: '#art', totalNumberOfViews: '649.9M'},
                    {'#': 7, Tag: '#photography', totalNumberOfViews: '583.1M'},
                    {'#': 8, Tag: '#happy', totalNumberOfViews: '578.8M'},
                    {'#': 9, Tag: '#picoftheday', totalNumberOfViews: '570.8M'},
                    {'#': 10, Tag: '#cute', totalNumberOfViews: '569.1M'},
                    {'#': 11, Tag: '#follow', totalNumberOfViews: '560.9M'},
                    {'#': 12, Tag: '#tbt', totalNumberOfViews: '536.4M'},
                    {'#': 13, Tag: '#followme', totalNumberOfViews: '528.5M'},
                    {'#': 14, Tag: '#nature', totalNumberOfViews: '525.7M'},
                    {'#': 15, Tag: '#like4like', totalNumberOfViews: '515.6M'},
                    {'#': 16, Tag: '#travel', totalNumberOfViews: '497.3M'},
                    {'#': 17, Tag: '#instagram', totalNumberOfViews: '482.6M'},
                    {'#': 18, Tag: '#style', totalNumberOfViews: '472.3M'},
                    {'#': 19, Tag: '#repost', totalNumberOfViews: '471.4M'},
                    {'#': 20, Tag: '#summer', totalNumberOfViews: '454.2M'},
                    {'#': 21, Tag: '#instadaily', totalNumberOfViews: '444.0M'},
                    {'#': 22, Tag: '#selfie', totalNumberOfViews: '422.6M'},
                    {'#': 23, Tag: '#me', totalNumberOfViews: '420.3M'},
                    {'#': 24, Tag: '#friends', totalNumberOfViews: '396.7M'},
                    {'#': 25, Tag: '#fitness', totalNumberOfViews: '395.8M'},
                    {'#': 26, Tag: '#girl', totalNumberOfViews: '393.8M'},
                    {'#': 27, Tag: '#food', totalNumberOfViews: '391.9M'},
                    {'#': 28, Tag: '#fun', totalNumberOfViews: '385.6M'},
                    {'#': 29, Tag: '#beauty', totalNumberOfViews: '382.8M'},
                    {'#': 30, Tag: '#instalike', totalNumberOfViews: '374.6M'},
                    {'#': 31, Tag: '#smile', totalNumberOfViews: '364.5M'},
                    {'#': 32, Tag: '#family', totalNumberOfViews: '357.7M'},
                    {'#': 33, Tag: '#photo', totalNumberOfViews: '334.6M'},
                    {'#': 34, Tag: '#life', totalNumberOfViews: '334.5M'},
                    {'#': 35, Tag: '#likeforlike', totalNumberOfViews: '328.2M'},
                    {'#': 36, Tag: '#music', totalNumberOfViews: '316.1M'},
                    {'#': 37, Tag: '#ootd', totalNumberOfViews: '308.2M'},
                    {'#': 38, Tag: '#follow4follow', totalNumberOfViews: '290.6M'},
                    {'#': 39, Tag: '#makeup', totalNumberOfViews: '285.3M'},
                    {'#': 40, Tag: '#amazing', totalNumberOfViews: '277.5M'},
                    {'#': 41, Tag: '#igers', totalNumberOfViews: '276.5M'},
                    {'#': 42, Tag: '#nofilter', totalNumberOfViews: '268.9M'},
                    {'#': 43, Tag: '#dog', totalNumberOfViews: '264.0M'},
                    {'#': 44, Tag: '#model', totalNumberOfViews: '254.7M'},
                    {'#': 45, Tag: '#sunset', totalNumberOfViews: '249.8M'},
                    {'#': 46, Tag: '#beach', totalNumberOfViews: '246.8M'},
                    {'#': 47, Tag: '#instamood', totalNumberOfViews: '238.1M'},
                    {'#': 48, Tag: '#foodporn', totalNumberOfViews: '229.4M'},
                    {'#': 49, Tag: '#motivation', totalNumberOfViews: '229.1M'},
                    {'#': 50, Tag: '#followforfollow', totalNumberOfViews: '227.9M'},
                    {'#': 51, Tag: '#design', totalNumberOfViews: '227.6M'},
                    {'#': 52, Tag: '#lifestyle', totalNumberOfViews: '222.5M'},
                    {'#': 53, Tag: '#sky', totalNumberOfViews: '222.0M'},
                    {'#': 54, Tag: '#l4l', totalNumberOfViews: '220.7M'},
                    {'#': 55, Tag: '#f4f', totalNumberOfViews: '217.7M'},
                    {'#': 56, Tag: '#일상', totalNumberOfViews: '210.6M'},
                    {'#': 57, Tag: '#cat', totalNumberOfViews: '209.7M'},
                    {'#': 58, Tag: '#handmade', totalNumberOfViews: '206.0M'},
                    {'#': 59, Tag: '#hair', totalNumberOfViews: '204.0M'},
                    {'#': 60, Tag: '#vscocam', totalNumberOfViews: '202.2M'},
                    {'#': 61, Tag: '#bestoftheday', totalNumberOfViews: '201.8M'},
                    {'#': 62, Tag: '#vsco', totalNumberOfViews: '200.0M'},
                    {'#': 63, Tag: '#funny', totalNumberOfViews: '191.6M'},
                    {'#': 64, Tag: '#dogsofinstagram', totalNumberOfViews: '190.0M'},
                    {'#': 65, Tag: '#drawing', totalNumberOfViews: '187.6M'},
                    {'#': 66, Tag: '#artist', totalNumberOfViews: '187.3M'},
                    {'#': 67, Tag: '#gym', totalNumberOfViews: '187.2M'},
                    {'#': 68, Tag: '#flowers', totalNumberOfViews: '185.1M'},
                    {'#': 69, Tag: '#baby', totalNumberOfViews: '182.6M'},
                    {'#': 70, Tag: '#wedding', totalNumberOfViews: '180.5M'},
                    {'#': 71, Tag: '#girls', totalNumberOfViews: '179.8M'},
                    {'#': 72, Tag: '#instapic', totalNumberOfViews: '179.0M'},
                    {'#': 73, Tag: '#pretty', totalNumberOfViews: '177.4M'},
                    {'#': 74, Tag: '#likeforlikes', totalNumberOfViews: '176.9M'},
                    {'#': 75, Tag: '#photographer', totalNumberOfViews: '170.4M'},
                    {'#': 76, Tag: '#instafood', totalNumberOfViews: '169.9M'},
                    {'#': 77, Tag: '#party', totalNumberOfViews: '166.8M'},
                    {'#': 78, Tag: '#inspiration', totalNumberOfViews: '166.8M'},
                    {'#': 79, Tag: '#lol', totalNumberOfViews: '165.1M'},
                    {'#': 80, Tag: '#cool', totalNumberOfViews: '161.4M'},
                    {'#': 81, Tag: '#workout', totalNumberOfViews: '161.0M'},
                    {'#': 82, Tag: '#likeforfollow', totalNumberOfViews: '160.1M'},
                    {'#': 83, Tag: '#swag', totalNumberOfViews: '158.2M'},
                    {'#': 84, Tag: '#fit', totalNumberOfViews: '157.1M'},
                    {'#': 85, Tag: '#healthy', totalNumberOfViews: '156.8M'},
                    {'#': 86, Tag: '#yummy', totalNumberOfViews: '153.3M'},
                    {'#': 87, Tag: '#blackandwhite', totalNumberOfViews: '152.6M'},
                    {'#': 88, Tag: '#foodie', totalNumberOfViews: '151.6M'},
                    {'#': 89, Tag: '#moda', totalNumberOfViews: '150.9M'},
                    {'#': 90, Tag: '#home', totalNumberOfViews: '146.7M'},
                    {'#': 91, Tag: '#christmas', totalNumberOfViews: '145.9M'},
                    {'#': 92, Tag: '#black', totalNumberOfViews: '144.6M'},
                    {'#': 93, Tag: '#memes', totalNumberOfViews: '141.8M'},
                    {'#': 94, Tag: '#holiday', totalNumberOfViews: '141.4M'},
                    {'#': 95, Tag: '#pink', totalNumberOfViews: '140.0M'},
                    {'#': 96, Tag: '#sea', totalNumberOfViews: '139.5M'},
                    {'#': 97, Tag: '#landscape', totalNumberOfViews: '139.0M'},
                    {'#': 98, Tag: '#blue', totalNumberOfViews: '138.6M'},
                    {'#': 99, Tag: '#london', totalNumberOfViews: '138.2M'},
                    {'#': 100, Tag: '#winter', totalNumberOfViews: '135.7M'},

                ]
            }
        }

    }
</script>

<style>
    div.table {
        width: 75%;
        margin: 12px;
        padding: 12px;
    }
</style>