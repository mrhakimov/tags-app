import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// Author: Amirjon Qodirov

let store = new Vuex.Store({
    state: {
        tags: [],
        result: "",

        blogTags: [
            {
                name: "Trending Hashtags for funny TikTok videos", description: "Trending Hashtags", tags: [
                    {Tag: "#15svines", Views: "12T"},
                    {Tag: "1millionaudition", Views: "12T"},
                    {Tag: "#1mincomedy", Views: "12T"},
                    {Tag: "#acting", Views: "12T"},
                    {Tag: "#blooper", Views: "12T"},
                    {Tag: "#comedy", Views: "12T"},
                    {Tag: "#comedyindia", Views: "12T"},
                    {Tag: "#deepfateh", Views: "12T"},
                    {Tag: "#dosti", Views: "12T"},
                    {Tag: "#feature", Views: "12T"},
                    {Tag: "#featurethis", Views: "12T"},
                    {Tag: "#foryou", Views: "12T"},
                    {Tag: "#foryoupage", Views: "12T"},
                    {Tag: "#loveyou", Views: "12T"},
                    {Tag: "#prank", Views: "12T"},
                    {Tag: "#relationship", Views: "12T"},
                    {Tag: "#suit", Views: "12T"},
                    {Tag: "#tiktok", Views: "12T"},
                    {Tag: "#tiktok_india", Views: "12T"},
                    {Tag: "#trending", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for Educational TikTok videos", description: "Tags for Educational", tags: [
                    {Tag: "#careergoals", Views: "~T"},
                    {Tag: "#education", Views: "~M"},
                    {Tag: "#educationalbusiness", Views: "~T"},
                    {Tag: "#edutok", Views: "~M"},
                    {Tag: "#edutoklifetips", Views: "~T"},
                    {Tag: "#iterviewtipss", Views: "~M"},
                    {Tag: "#knowledge", Views: "~T"},
                    {Tag: "#learn", Views: "~M"},
                    {Tag: "#learncbse", Views: "~T"},
                    {Tag: "#learning", Views: "~M"},
                    {Tag: "#mathmagic", Views: "~T"},
                    {Tag: "#mindpower", Views: "~M"},
                    {Tag: "#Morden_Education", Views: "~T"},
                    {Tag: "#naukri", Views: "~M"},
                    {Tag: "#politics", Views: "~T"},
                    {Tag: "#quiz", Views: "~M"},
                    {Tag: "#speach", Views: "~T"},
                    {Tag: "#speakingenglish", Views: "~M"},
                    {Tag: "#testbook", Views: "~T"},
                    {Tag: "#topper", Views: "~M"},
                    {Tag: "#trend", Views: "~M"},
                ]
            },
            {
                name: "Best Hashtags for New songs for more likes", description: "Tags for song", tags: [
                    {Tag: "#duetwithme", Views: "1k"},
                    {Tag: "#foryou", Views: "1k"},
                    {Tag: "#marjaava", Views: "1k"},
                    {Tag: "#MooMoodTingTongTwist", Views: "1k"},
                    {Tag: "#music", Views: "1k"},
                    {Tag: "#musically_new_songs", Views: "1k"},
                    {Tag: "#new", Views: "1k"},
                    {Tag: "#new_trending", Views: "1k"},
                    {Tag: "#newsong", Views: "1k"},
                    {Tag: "#punjabisongs", Views: "1k"},
                    {Tag: "#ranjeetbawa", Views: "1k"},
                    {Tag: "#shootmode", Views: "1k"},
                    {Tag: "#slowmo", Views: "1k"},
                    {Tag: "#songs", Views: "1k"},
                    {Tag: "#tiktok", Views: "1k"},
                    {Tag: "#tiktok_India", Views: "1k"},
                    {Tag: "#tiktokflam", Views: "1k"},
                    {Tag: "#tiktokpunjab", Views: "1k"},
                    {Tag: "#UdictionaryMagic", Views: "1k"},
                    {Tag: "#viral", Views: "1k"},
                    {Tag: "#viralvideo", Views: "1k"},

                ]
            },
            {
                name: "Best Hashtags for motivational TikTok videos", description: "Tags for Motivation", tags: [
                    {Tag: "#BigBillionAnthem", Views: "12T"},
                    {Tag: "#cleanindia", Views: "12T"},
                    {Tag: "#clear", Views: "12T"},
                    {Tag: "#decison", Views: "12T"},
                    {Tag: "#edutok", Views: "12T"},
                    {Tag: "#edutokmotivation", Views: "12T"},
                    {Tag: "#feacherme", Views: "12T"},
                    {Tag: "#feacherthis", Views: "12T"},
                    {Tag: "#inspirational", Views: "12T"},
                    {Tag: "#livemorechallenge", Views: "12T"},
                    {Tag: "#madewithme", Views: "12T"},
                    {Tag: "#motivationalvideo", Views: "12T"},
                    {Tag: "#myvoice", Views: "12T"},
                    {Tag: "#poetry", Views: "12T"},
                    {Tag: "#shayari", Views: "12T"},
                    {Tag: "#talk", Views: "12T"},
                    {Tag: "#teamnawab", Views: "12T"},
                    {Tag: "#tiktokgallery", Views: "12T"},
                    {Tag: "#wrong", Views: "12T"},
                    {Tag: "#like", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for child TikTok videos", description: "Tags for child TikTok videos", tags: [
                    {Tag: "#babygirl", Views: "12T"},
                    {Tag: "#bachha", Views: "12T"},
                    {Tag: "#child4child", Views: "12T"},
                    {Tag: "#childact", Views: "12T"},
                    {Tag: "#childcomedy", Views: "12T"},
                    {Tag: "#childhood", Views: "12T"},
                    {Tag: "#children", Views: "12T"},
                    {Tag: "#childsafety", Views: "12T"},
                    {Tag: "#childstar", Views: "12T"},
                    {Tag: "#childvoice", Views: "12T"},
                    {Tag: "#cute", Views: "12T"},
                    {Tag: "#desibaby", Views: "12T"},
                    {Tag: "#doll", Views: "12T"},
                    {Tag: "#golden_child", Views: "12T"},
                    {Tag: "#nephew", Views: "12T"},
                    {Tag: "#niece", Views: "12T"},
                    {Tag: "#onlychild", Views: "12T"},
                    {Tag: "#savechild", Views: "12T"},
                    {Tag: "#thegoodtouch", Views: "12T"},
                    {Tag: "#thischild", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for friendship TikTok videos", description: "Tags for friendship TikTok videos", tags: [


                    {Tag: "#dost", Views: "12T"},
                    {Tag: "#fakefriendship", Views: "12T"},
                    {Tag: "#friendship_song", Views: "12T"},
                    {Tag: "#friendshipbracelets", Views: "12T"},
                    {Tag: "#friendshipbroken", Views: "12T"},
                    {Tag: "#friendshipchallange", Views: "12T"},
                    {Tag: "#friendshipday", Views: "12T"},
                    {Tag: "#friendshipforever", Views: "12T"},
                    {Tag: "#friendshipg", Views: "12T"},
                    {Tag: "#friendshipgoals", Views: "12T"},
                    {Tag: "#friendshipgoalzz", Views: "12T"},
                    {Tag: "#friendshiplove", Views: "12T"},
                    {Tag: "#friendships", Views: "12T"},
                    {Tag: "#friendshiptest", Views: "12T"},
                    {Tag: "#happy_friendship_day", Views: "12T"},
                    {Tag: "#internetfriendship", Views: "12T"},
                    {Tag: "#loveisfriendship", Views: "12T"},
                    {Tag: "#realfriendship", Views: "12T"},
                    {Tag: "#thisfriendshipisover", Views: "12T"},
                    {Tag: "#truefriendship", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for Health related TikTok videos for more followers", description: "Tags for Health TikTok videos", tags: [
                    {Tag: "#acupessure", Views: "12T"},
                    {Tag: "#addiction", Views: "12T"},
                    {Tag: "#advice", Views: "12T"},
                    {Tag: "#change", Views: "12T"},
                    {Tag: "#edutok", Views: "12T"},
                    {Tag: "#exercise", Views: "12T"},
                    {Tag: "#fitness", Views: "12T"},
                    {Tag: "#forhealt", Views: "12T"},
                    {Tag: "#gym", Views: "12T"},
                    {Tag: "#headache", Views: "12T"},
                    {Tag: "#healthiswealth", Views: "12T"},
                    {Tag: "#healthtip", Views: "12T"},
                    {Tag: "#healthtips", Views: "12T"},
                    {Tag: "#healthy", Views: "12T"},
                    {Tag: "#healthylife", Views: "12T"},
                    {Tag: "#homeremedues", Views: "12T"},
                    {Tag: "#indian", Views: "12T"},
                    {Tag: "#madinfluence", Views: "12T"},
                    {Tag: "#stayhealthy", Views: "12T"},
                    {Tag: "#tiktokindia", Views: "12T"},
                    {Tag: "#tip", Views: "12T"},
                    {Tag: "#ttfitness", Views: "12T"},
                    {Tag: "#ttsportsmela", Views: "12T"},
                    {Tag: "#weightloss", Views: "12T"},
                    {Tag: "#workout", Views: "12T"},
                    {Tag: "#tiktokindia", Views: "12T"},
                ]
            },
            {
                name: "Popular Hashtags for dancing TikTok videos", description: "Tags for dancing TikTok videos", tags: [
                    {Tag: "#badboydance", Views: "12T"},
                    {Tag: "#dancechallenge", Views: "12T"},
                    {Tag: "#dancecover", Views: "12T"},
                    {Tag: "#danceid", Views: "12T"},
                    {Tag: "#danceindia", Views: "12T"},
                    {Tag: "#danceinpublic", Views: "12T"},
                    {Tag: "#DanceKaJungistaan", Views: "12T"},
                    {Tag: "#dancekpop", Views: "12T"},
                    {Tag: "#dancelove", Views: "12T"},
                    {Tag: "#dancemasti", Views: "12T"},
                    {Tag: "#dancemom", Views: "12T"},
                    {Tag: "#dancemoves", Views: "12T"},
                    {Tag: "#dancer", Views: "12T"},
                    {Tag: "#dancetutorial", Views: "12T"},
                    {Tag: "#dancevideo", Views: "12T"},
                    {Tag: "#dancewithkakkar", Views: "12T"},
                    {Tag: "#fingerdance", Views: "12T"},
                    {Tag: "#haryanvidance", Views: "12T"},
                    {Tag: "#punchdance", Views: "12T"},
                    {Tag: "#skeletondance", Views: "12T"},
                ]
            },
            {
                name: "Top Hashtags for recipe TikTok videos", description: "Tags for recipe TikTok videos", tags: [
                    {Tag: "#breakfastrecipe", Views: "12T"},
                    {Tag: "#cakerecipe", Views: "12T"},
                    {Tag: "#chiritmasrecipe", Views: "12T"},
                    {Tag: "#esayquikrecipe", Views: "12T"},
                    {Tag: "#esayrecipe", Views: "12T"},
                    {Tag: "#foodrecipe", Views: "12T"},
                    {Tag: "#homemadrecipe", Views: "12T"},
                    {Tag: "#indianrecipe", Views: "12T"},
                    {Tag: "#madhurasrecipe", Views: "12T"},
                    {Tag: "#momsrecipe", Views: "12T"},
                    {Tag: "#myrecipe", Views: "12T"},
                    {Tag: "#mysecretrecipe", Views: "12T"},
                    {Tag: "#newrecipe", Views: "12T"},
                    {Tag: "#notminerecipe", Views: "12T"},
                    {Tag: "#recipes", Views: "12T"},
                    {Tag: "#tiktokrecipe", Views: "12T"},
                    {Tag: "#vagerecipe", Views: "12T"},
                    {Tag: "#veganrecipe", Views: "12T"},
                    {Tag: "#videorecipe", Views: "12T"},
                    {Tag: "#whisperarecipe", Views: "12T"},
                ]
            },
            {
                name: "Top Hashtags for craft TikTok videos", description: "Tags for craft TikTok videos", tags: [
                    {Tag: "#5_min_craft", Views: "12T"},
                    {Tag: "#5mincraft", Views: "12T"},
                    {Tag: "#airecraft", Views: "12T"},
                    {Tag: "#artandcraft", Views: "12T"},
                    {Tag: "#bottlecraft", Views: "12T"},
                    {Tag: "#craftandart", Views: "12T"},
                    {Tag: "#craftchallange", Views: "12T"},
                    {Tag: "#crafting", Views: "12T"},
                    {Tag: "#crafts", Views: "12T"},
                    {Tag: "#craftsman", Views: "12T"},
                    {Tag: "#crafttime", Views: "12T"},
                    {Tag: "#craftwork", Views: "12T"},
                    {Tag: "#crafty", Views: "12T"},
                    {Tag: "#craftyourlife", Views: "12T"},
                    {Tag: "#diycraft", Views: "12T"},
                    {Tag: "#easycraft", Views: "12T"},
                    {Tag: "#mincraft", Views: "12T"},
                    {Tag: "#minecraft", Views: "12T"},
                    {Tag: "#newspapercraft", Views: "12T"},
                    {Tag: "#sabirmetcraft", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for beauty videos for more views", description: "Tags for beauty TikTok videos", tags: [
                    {Tag: "#beauty4charity", Views: "12T"},
                    {Tag: "#beautyandthebeast", Views: "12T"},
                    {Tag: "#beautyblender", Views: "12T"},
                    {Tag: "#beautyblogger", Views: "12T"},
                    {Tag: "#beautychallenge", Views: "12T"},
                    {Tag: "#beautyfull", Views: "12T"},
                    {Tag: "#beautyguru", Views: "12T"},
                    {Tag: "#beautyhacks", Views: "12T"},
                    {Tag: "#Beautyls", Views: "12T"},
                    {Tag: "#beautyofnature", Views: "12T"},
                    {Tag: "#beautyofquetta", Views: "12T"},
                    {Tag: "#beautytips", Views: "12T"},
                    {Tag: "#beautytt", Views: "12T"},
                    {Tag: "#DanceforBeauty", Views: "12T"},
                    {Tag: "#fabulous_beauty_25", Views: "12T"},
                    {Tag: "#homebeautyhacks", Views: "12T"},
                    {Tag: "#hudabeauty", Views: "12T"},
                    {Tag: "#nargisbeauty", Views: "12T"},
                    {Tag: "#naturalbeauty", Views: "12T"},
                    {Tag: "#showyourbeauty", Views: "12T"},
                    {Tag: "#sleepingbeauty", Views: "12T"},
                    {Tag: "#unlockbeauty", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for art TikTok videos", description: "Tags for art TikTok videos", tags: [
                    {Tag: "#art02", Views: "12T"},
                    {Tag: "#artchallenge", Views: "12T"},
                    {Tag: "#artik", Views: "12T"},
                    {Tag: "#artist", Views: "12T"},
                    {Tag: "#artlover", Views: "12T"},
                    {Tag: "#artmeme", Views: "12T"},
                    {Tag: "#artproject", Views: "12T"},
                    {Tag: "#artwork", Views: "12T"},
                    {Tag: "#chalkart", Views: "12T"},
                    {Tag: "#creative_art_king", Views: "12T"},
                    {Tag: "#doodleart", Views: "12T"},
                    {Tag: "#isthisart", Views: "12T"},
                    {Tag: "#myart", Views: "12T"},
                    {Tag: "#nailart", Views: "12T"},
                    {Tag: "#pencilart", Views: "12T"},
                    {Tag: "#picsart", Views: "12T"},
                    {Tag: "#resinart", Views: "12T"},
                    {Tag: "#visualart", Views: "12T"},
                    {Tag: "#wallart", Views: "12T"},
                    {Tag: "#workofart", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for festival videos", description: "Tags for festival TikTok videos", tags: [
                    {Tag: "#favfestival", Views: "12T"},
                    {Tag: "#festivalday", Views: "12T"},
                    {Tag: "#festivalfashion", Views: "12T"},
                    {Tag: "#festivalfun", Views: "12T"},
                    {Tag: "#festivali", Views: "12T"},
                    {Tag: "#festivalmode", Views: "12T"},
                    {Tag: "#festivals", Views: "12T"},
                    {Tag: "#festivalseason", Views: "12T"},
                    {Tag: "#festivalteen", Views: "12T"},
                    {Tag: "#filmfestival", Views: "12T"},
                    {Tag: "#hindufestival", Views: "12T"},
                    {Tag: "#holifestival", Views: "12T"},
                    {Tag: "#marathifestival", Views: "12T"},
                    {Tag: "#mifanfestival", Views: "12T"},
                    {Tag: "#mifestival", Views: "12T"},
                    {Tag: "#musicfestival", Views: "12T"},
                    {Tag: "#pridefestival", Views: "12T"},
                    {Tag: "#renaissancefestival", Views: "12T"},
                    {Tag: "#s2ofestival", Views: "12T"},
                    {Tag: "#youthfestival", Views: "12T"},
                ]
            },
            {
                name: "Best Hashtags for rangoli TikTok videos", description: "Tags for rangoli TikTok videos", tags: [
                    {Tag: "#3drangoli", Views: "12T"},
                    {Tag: "#diwalirangoli", Views: "12T"},
                    {Tag: "#easyrangoli", Views: "12T"},
                    {Tag: "#festivalrangoli", Views: "12T"},
                    {Tag: "#ganeshrangoli", Views: "12T"},
                    {Tag: "#indolianrangoli", Views: "12T"},
                    {Tag: "#myrangoli", Views: "12T"},
                    {Tag: "#myrangoli", Views: "12T"},
                    {Tag: "#ran", Views: "12T"},
                    {Tag: "#rangoli_art", Views: "12T"},
                    {Tag: "#rangoli_tiktok_group", Views: "12T"},
                    {Tag: "#rangoliart", Views: "12T"},
                    {Tag: "#rangoliarts", Views: "12T"},
                    {Tag: "#rangolichallenge", Views: "12T"},
                    {Tag: "#rangolimaking", Views: "12T"},
                    {Tag: "#simplerangoli", Views: "12T"},
                    {Tag: "#sonarangoli", Views: "12T"},
                    {Tag: "#specialrangoli", Views: "12T"},
                ]
            },
        ]


    },
    mutations: {
        SET_TAGS_TO_STATE: (state, tags) => {
            state.tags = tags;
        },
        REM_FROM_TAGS: (state, id) => {
            state.tags.splice(id, 1);
        },
        ClEAR: (state) => {
            state.tags = [];
        },
        CHANGE: (state, text) => {
            state.result = "";
            state.result += text

            if (text.length > 0 && text[text.length - 1] !== ' '
                && text[text.length - 1] !== '\n') {
                state.result += '\n'
            }

            for (let item in state.tags) {
                let s = "#" + state.tags[item] + " ";
                state.result += s;
            }
        }

    },
    actions: {
        GET_TAGS_FROM_API({commit}, tags) {
            commit('SET_TAGS_TO_STATE', tags);
        },
        REMOVE_FROM_TAGS({commit}, id) {
            commit('REM_FROM_TAGS', id)
        },
        CLEAR({commit}) {
            commit('ClEAR')
        },
        CHANGE_RESULT({commit}, text) {
            commit('CHANGE', text)
        }

    },
    getters: {
        TAGS(state) {
            return state.tags;
        },
        RESULT(state) {
            return state.result
        },
        BLOG_TAGS(state) {
            return state.blogTags
        }
    }
});

export default store;
