<template>
  <div>
      <h1>Extra5 full view page</h1>
      <div>
			Numbers:
			<span v-for="(number, index) in extra5WinningNumbers.numbers" :key="index">{{ number }} </span>
		</div>
		<div>drawId: {{ extra5WinningNumbers.drawId }}</div>
		<div>Winner Categories:</div>
		<div>
			<ul>
				<li
					v-for="(extra5Winner, index) in extra5Winners"
					:key="index"
				>{{ extra5Winner.type }} |-| {{ extra5Winner.winners }} |-| {{ extra5Winner.fixed }}</li>
			</ul>
		</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "extra5FullView",
    computed: {
		...mapGetters(["extra5WinningNumbers", "extra5Winners"])
	},
	methods: {
		...mapActions({
			fetchResultNumbers: "fetchExtra5ResultNumbers",
			fetchWinners: "fetchExtra5Winners"
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