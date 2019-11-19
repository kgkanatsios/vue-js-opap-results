import Axios from "axios";

const state = {
    drawId: null,
    drawTime: null,
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
            fixed: null
        },
        2: {
            type: "5",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            fixed: null
        },
        3: {
            type: "4+1",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            fixed: null
        }
    }
};

const mutations = {
    SET_JOKER_RESULTS(state, { numbers, joker, drawId, drawTime }) {
        state.resultNumbers.numbers = numbers;
        state.resultNumbers.joker = joker;
        state.drawId = drawId;
        state.drawTime = drawTime;
    },
    SET_JOKER_WINNERS() {}
};

const actions = {
    fetchJokerResultNumbers: ({ commit }) => {
        Axios.get("/5104/last-result-and-active")
            .then(res => {
                commit("SET_JOKER_RESULTS", {
                    numbers: res.data.last.winningNumbers.list,
                    joker: res.data.last.winningNumbers.bonus[0],
                    drawId: res.data.last.drawId,
                    drawTime: res.data.last.drawTime
                });
            })
            .catch(error => console.log(error));
    },
    fetchJokerWinners: () => {
        Axios.get("/5104/last-result-and-active")
            .then(res => {
                console.log(res.data.last.prizeCategories);
            })
            .catch(error => console.log(error));
    }
};
const getters = {
    jokerWinningNumbers: state => {
        return {
            numbers: state.resultNumbers.numbers,
            joker: state.resultNumbers.joker,
            drawId: state.drawId
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
