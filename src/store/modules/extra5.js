import Axios from "axios";

const state = {
    drawId: null,
    drawTime: null,
    nextDrawTime: null,
    resultNumbers: [],
    categories: {
        1: {
            type: "Ι (5 σωστές προβλέψεις)",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        2: {
            type: "ΙΙ (4 σωστές προβλέψεις)",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null
        },
        3: {
            type: "ΙΙΙ (3 σωστές προβλέψεις)",
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
    SET_EXTRA5_RESULTS(state, {
        numbers,
        drawId,
        drawTime,
        nextDrawTime
    }) {
        state.resultNumbers = numbers;
        state.drawId = drawId;
        state.drawTime = drawTime;
        state.nextDrawTime = nextDrawTime;
    },
    SET_EXTRA5_WINNERS(state, prizeCategories) {
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
    fetchExtra5ResultNumbers: ({
        commit
    }) => {
        Axios.get("/5106/last-result-and-active")
            .then(res => {
                commit("SET_EXTRA5_RESULTS", {
                    numbers: res.data.last.winningNumbers.list,
                    drawId: res.data.last.drawId,
                    drawTime: res.data.last.drawTime,
                    nextDrawTime: res.data.active.drawTime
                });
            })
            .catch(error => console.log(error));
    },
    fetchExtra5Winners: ({
        commit
    }) => {
        Axios.get("/5106/last-result-and-active")
            .then(res => {
                commit("SET_EXTRA5_WINNERS", res.data.last.prizeCategories);
            })
            .catch(error => console.log(error));
    }
};

const getters = {
    extra5WinningNumbers: state => {
        return {
            numbers: state.resultNumbers,
            drawId: state.drawId,
            nextDrawTime: state.nextDrawTime
        };
    },
    extra5Winners: state => {
        return state.categories;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};