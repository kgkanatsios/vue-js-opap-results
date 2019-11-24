<template>
	<div>
		<h1>Lotto Full View</h1>
		<div>
			Numbers:
			<span v-for="(number, index) in lottoWinningNumbers.numbers" :key="index">{{ number }}</span>
		</div>
		<div>Lotto +: {{ lottoWinningNumbers.lotto }}</div>
		<div>drawId: {{ lottoWinningNumbers.drawId }}</div>
		<div>Winner Categories:</div>
		<div>
			<ul>
				<li
					v-for="(lottoWinner, index) in lottoWinners"
					:key="index"
				>{{ lottoWinner.type }} |-| {{ lottoWinner.totalEarnings }} |-| {{ lottoWinner.winners }} |-| {{ lottoWinner.divident }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "lottoFullView",
	computed: {
		...mapGetters(["lottoWinningNumbers", "lottoWinners"])
	},
	methods: {
		...mapActions({
			fetchResultNumbers: "fetchLottoResultNumbers",
			fetchWinners: "fetchLottoWinners"
		})
	},
	created() {
		this.fetchResultNumbers();
		this.fetchWinners();
	}
};
</script>

<style>
</style>