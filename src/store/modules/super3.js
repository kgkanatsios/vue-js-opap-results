import Axios from "axios";

const state = {
    drawId: null,
    drawTime: null,
    nextDrawTime: null,
    resultNumbers: [],
    categories: {
        1: {
            type: "Με τη σειρά κλήρωσης",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        2: {
            type: "2 όμοια ψηφία σε οποιαδήποτε σειρά",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        3: {
            type: "3 διαφορετικά ψηφία σε οποιαδήποτε σειρά",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        4: {
            type: "2 οποιαδήποτε ψηφία με την σειρά κλήρωσης",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        5: {
            type: "1 οποιοδήποτε ψηφίο με τη σειρά της κλήρωσης",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        }
    }
};

const mutations = {
    SET_SUPER3_RESULTS(state, { numbers, drawId, drawTime, nextDrawTime }) {
        state.resultNumbers = numbers;
        state.drawId = drawId;
        state.drawTime = drawTime;
        state.nextDrawTime = nextDrawTime;
    },
    SET_SUPER3_WINNERS(state, prizeCategories) {
        prizeCategories.forEach(prizeCategory => {
            state.categories[prizeCategory.id].divident =
                prizeCategory.divident;
            state.categories[prizeCategory.id].winners = prizeCategory.winners;
            state.categories[prizeCategory.id].distributed =
                prizeCategory.distributed;
            state.categories[prizeCategory.id].jackpot = prizeCategory.jackpot;
            state.categories[prizeCategory.id].totalEarnings =
                prizeCategory.distributed + prizeCategory.jackpot;
            state.categories[prizeCategory.id].fixed = prizeCategory.fixed;
        });
    }
};

const actions = {
    fetchSuper3ResultNumbers: ({ commit }) => {
        Axios.get("/2100/last-result-and-active")
            .then(res => {
                commit("SET_SUPER3_RESULTS", {
                    numbers: res.data.last.winningNumbers.list,
                    drawId: res.data.last.drawId,
                    drawTime: res.data.last.drawTime,
                    nextDrawTime: res.data.active.drawTime
                });
            })
            .catch(error => console.log(error));
    },
    fetchSuper3Winners: ({ commit }) => {
        Axios.get("/2100/last-result-and-active")
            .then(res => {
                commit("SET_SUPER3_WINNERS", res.data.last.prizeCategories);
            })
            .catch(error => console.log(error));
    }
};

const getters = {
    super3WinningNumbers: state => {
        return {
            numbers: state.resultNumbers,
            drawId: state.drawId
        };
    },
    super3Winners: state => {
        return state.categories;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};