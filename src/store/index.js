import Vue from "vue";
import Vuex from "vuex";

import joker from "./modules/joker";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        joker
    }
});
