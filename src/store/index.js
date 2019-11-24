import Vue from "vue";
import Vuex from "vuex";

import joker from "./modules/joker";
import lotto from "./modules/lotto";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        joker,
        lotto
    }
});
