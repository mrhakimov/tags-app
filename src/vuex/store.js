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
                name: "Sport", description: "Tags for Sport", tags: [{
                    Tag: "#cdscs", Views: "12T"
                }]
            },
            {
                name: "Sex", description: "Tags for Sex", tags: [
                    {
                        Tag: "#sex", Views: "~T"
                    },
                    {
                        Tag: "#porn", Views: "~M"
                    },

                ]
            },
            {
                name: "Film", description: "Tags for film", tags: [{
                    Tag: "#inseption", Views: "1k"
                }]
            },
            {
                name: "like", description: "Tags for Like", tags: [{
                    Tag: "#like", Views: "12T"
                }]
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
