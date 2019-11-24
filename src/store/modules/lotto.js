import Axios from "axios";

const state = {
    drawId: null,
    drawTime: null,
    nextDrawTime: null,
    resultNumbers: {
        numbers: [],
        lotto: null
    },
    categories: {
        1: {
            type: "6",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        10: {
            type: "5+1",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        2: {
            type: "5",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        3: {
            type: "4",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        4: {
            type: "3",
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
    SET_LOTTO_RESULTS(
        state,
        { numbers, lotto, drawId, drawTime, nextDrawTime }
    ) {
        state.resultNumbers.numbers = numbers;
        state.resultNumbers.lotto = lotto;
        state.drawId = drawId;
        state.drawTime = drawTime;
        state.nextDrawTime = nextDrawTime;
    },
    SET_LOTTO_WINNERS(state, prizeCategories) {
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
    fetchLottoResultNumbers: ({ commit }) => {
        Axios.get("/5103/last-result-and-active")
            .then(res => {
                commit("SET_LOTTO_RESULTS", {
                    numbers: res.data.last.winningNumbers.list,
                    lotto: res.data.last.winningNumbers.bonus[0],
                    drawId: res.data.last.drawId,
                    drawTime: res.data.last.drawTime,
                    nextDrawTime: res.data.active.drawTime
                });
            })
            .catch(error => console.log(error));
    },
    fetchLottoWinners: ({ commit }) => {
        Axios.get("/5103/last-result-and-active")
            .then(res => {
                commit("SET_LOTTO_WINNERS", res.data.last.prizeCategories);
            })
            .catch(error => console.log(error));
    }
};
const getters = {
    lottoWinningNumbers: state => {
        return {
            numbers: state.resultNumbers.numbers,
            lotto: state.resultNumbers.lotto,
            drawId: state.drawId
        };
    },
    lottoWinners: state => {
        return state.categories;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
