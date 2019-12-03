<template>
  <div>
      <h1>Super3 full view page</h1>
      <div>
			Numbers:
			<span v-for="(number, index) in super3WinningNumbers.numbers" :key="index">{{ number }} </span>
		</div>
		<div>drawId: {{ super3WinningNumbers.drawId }}</div>
		<div>Winner Categories:</div>
		<div>
			<ul>
				<li
					v-for="(super3Winner, index) in super3Winners"
					:key="index"
				>{{ super3Winner.type }} |-| {{ super3Winner.winners }} |-| {{ super3Winner.fixed }}</li>
			</ul>
		</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "super3FullView",
    computed: {
		...mapGetters(["super3WinningNumbers", "super3Winners"])
	},
	methods: {
		...mapActions({
			fetchResultNumbers: "fetchSuper3ResultNumbers",
			fetchWinners: "fetchSuper3Winners"
		})
	},
	created() {
		this.fetchResultNumbers();
		this.fetchWinners();
	}
}
</script>

<style>

</style>