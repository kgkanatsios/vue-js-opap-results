import Vue from "vue";
import Vuex from "vuex";

import joker from "./modules/joker";
import lotto from "./modules/lotto";
import proto from "./modules/proto";
import extra5 from "./modules/extra5";
import super3 from "./modules/super3";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        joker,
        lotto,
        proto,
        extra5,
        super3
    }
});
