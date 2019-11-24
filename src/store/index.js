import Vue from "vue";
import Vuex from "vuex";

import joker from "./modules/joker";
import lotto from "./modules/lotto";
import proto from "./modules/proto";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        joker,
        lotto,
        proto
    }
});
