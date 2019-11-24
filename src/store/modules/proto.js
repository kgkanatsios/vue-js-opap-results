import Axios from "axios";

const state = {
    drawId: null,
    drawTime: null,
    nextDrawTime: null,
    resultNumbers: [],
    categories: {
        1: {
            type: "1",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null,
            numbers: [],
            offset: 7
        },
        2: {
            type: "2",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null,
            numbers: [],
            offset: 6
        },
        3: {
            type: "3",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null,
            numbers: [],
            offset: 5
        },
        4: {
            type: "4",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null,
            numbers: [],
            offset: 4
        },
        5: {
            type: "5",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null,
            numbers: [],
            offset: 3
        },
        6: {
            type: "6",
            divident: null,
            winners: null,
            distributed: null,
            jackpot: null,
            totalEarnings: null,
            fixed: null,
            numbers: [],
            offset: 2
        }
    }
};

const mutations = {
    SET_PROTO_RESULTS(state, { numbers, drawId, drawTime, nextDrawTime }) {
        state.resultNumbers = numbers;
        state.drawId = drawId;
        state.drawTime = drawTime;
        state.nextDrawTime = nextDrawTime;
    },
    SET_PROTO_WINNERS(state, prizeCategories) {
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
            state.categories[prizeCategory.id].numbers = [
                state.resultNumbers.slice(
                    0,
                    state.categories[prizeCategory.id].offset
                ),
                state.resultNumbers.slice(
                    Math.max(
                        state.resultNumbers.length -
                            state.categories[prizeCategory.id].offset
                    )
                )
            ];
        });
    }
};

const actions = {
    fetchProtoResultNumbers: ({ commit }) => {
        Axios.get("/2101/last-result-and-active")
            .then(res => {
                commit("SET_PROTO_RESULTS", {
                    numbers: res.data.last.winningNumbers.list,
                    drawId: res.data.last.drawId,
                    drawTime: res.data.last.drawTime,
                    nextDrawTime: res.data.active.drawTime
                });
            })
            .catch(error => console.log(error));
    },
    fetchProtoWinners: ({ commit }) => {
        Axios.get("/2101/last-result-and-active")
            .then(res => {
                commit("SET_PROTO_WINNERS", res.data.last.prizeCategories);
            })
            .catch(error => console.log(error));
    }
};
const getters = {
    protoWinningNumbers: state => {
        return {
            numbers: state.resultNumbers,
            drawId: state.drawId
        };
    },
    protoWinners: state => {
        return state.categories;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
