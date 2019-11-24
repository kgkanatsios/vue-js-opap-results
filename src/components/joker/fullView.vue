<template>
	<div>
		<h1>joker full view page</h1>
		<div>
			Numbers:
			<span v-for="(number, index) in jokerWinningNumbers.numbers" :key="index">{{ number }}</span>
		</div>
		<div>Joker: {{ jokerWinningNumbers.joker }}</div>
		<div>drawId: {{ jokerWinningNumbers.drawId }}</div>
		<div>Winner Categories:</div>
		<div>
			<ul>
				<li
					v-for="(jokerWinner, index) in jokerWinners"
					:key="index"
				>{{ jokerWinner.type }} |-| {{ jokerWinner.totalEarnings }} |-| {{ jokerWinner.winners }} |-| {{ jokerWinner.divident }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "jokerFullView",
	computed: {
		...mapGetters(["jokerWinningNumbers", "jokerWinners"])
	},
	methods: {
		...mapActions({
			fetchResultNumbers: "fetchJokerResultNumbers",
			fetchWinners: "fetchJokerWinners"
		})
	},
	created() {
		this.fetchResultNumbers();
		this.fetchWinners();
	}
};
</script>

<style></style>
