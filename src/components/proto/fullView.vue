<template>
	<div>
		<h1>Proto Full View</h1>
		<div>
			Numbers:
			<span v-for="(number, index) in protoWinningNumbers.numbers" :key="index">{{ number }}</span>
		</div>
		<div>drawId: {{ protoWinningNumbers.drawId }}</div>
		<div>Winner Categories:</div>
		<div>
			<ul>
				<li
					v-for="(protoWinner, index) in protoWinners"
					:key="index"
				>{{ protoWinner.type }} |-| {{ protoWinner.totalEarnings }} |-| {{ protoWinner.winners }} |-| {{ protoWinner.divident }} |-| {{ protoWinner.numbers[0] }} |-| {{ protoWinner.numbers[1] }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "protoFullView",
	computed: {
		...mapGetters(["protoWinningNumbers", "protoWinners"])
	},
	methods: {
		...mapActions({
			fetchResultNumbers: "fetchProtoResultNumbers",
			fetchWinners: "fetchProtoWinners"
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