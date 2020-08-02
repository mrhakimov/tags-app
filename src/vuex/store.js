import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        tags: []
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
        }

    },
    actions: {
        GET_TAGS_FROM_API({commit},tags) {
            commit('SET_TAGS_TO_STATE', tags);
        },
        REMOVE_FROM_TAGS({commit}, id) {
            commit('REM_FROM_TAGS', id)
        },
        CLEAR({commit}) {
            commit('ClEAR')
        },

    },
    getters: {
        TAGS(state) {
            return state.tags;
        }
    }
});

export default store;
