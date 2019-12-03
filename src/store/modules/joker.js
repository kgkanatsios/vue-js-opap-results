import Axios from "axios";

const state = {
    drawId: null,
    drawTime: null,
    nextDrawTime: null,
    resultNumbers: {
        numbers: [],
        joker: null
    },
    categories: {
        1: {
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
            type: "4+1",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        4: {
            type: "4",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        5: {
            type: "3+1",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        6: {
            type: "3",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        7: {
            type: "2+1",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        8: {
            type: "1+1",
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
    SET_JOKER_RESULTS(
        state,
        { numbers, joker, drawId, drawTime, nextDrawTime }
    ) {
        state.resultNumbers.numbers = numbers;
        state.resultNumbers.joker = joker;
        state.drawId = drawId;
        state.drawTime = drawTime;
        state.nextDrawTime = nextDrawTime;
    },
    SET_JOKER_WINNERS(state, prizeCategories) {
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
    fetchJokerResultNumbers: ({ commit }) => {
        Axios.get("/5104/last-result-and-active")
            .then(res => {
                commit("SET_JOKER_RESULTS", {
                    numbers: res.data.last.winningNumbers.list,
                    joker: res.data.last.winningNumbers.bonus[0],
                    drawId: res.data.last.drawId,
                    drawTime: res.data.last.drawTime,
                    nextDrawTime: res.data.active.drawTime
                });
            })
            .catch(error => console.log(error));
    },
    fetchJokerWinners: ({ commit }) => {
        Axios.get("/5104/last-result-and-active")
            .then(res => {
                commit("SET_JOKER_WINNERS", res.data.last.prizeCategories);
            })
            .catch(error => console.log(error));
    }
};
const getters = {
    jokerWinningNumbers: state => {
        return {
            numbers: state.resultNumbers.numbers,
            joker: state.resultNumbers.joker,
            drawId: state.drawId,
            nextDrawTime: state.nextDrawTime
        };
    },
    jokerWinners: state => {
        return state.categories;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
