<template>
  <div>
    <h1>Lotto Basic View</h1>
    <div>
      Numbers:
      <span v-for="(number, index) in lottoWinningNumbers.numbers" :key="index">{{ number }}</span>
    </div>
    <div>Lotto +: {{ lottoWinningNumbers.lotto }}</div>
    <div>drawId: {{ lottoWinningNumbers.drawId }}</div>
    <div>Next Draw: {{ lottoWinningNumbers.nextDrawTime | date }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "lottoBasicView",
  computed: {
    ...mapGetters(["lottoWinningNumbers"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchLottoResultNumbers"
    })
  },
  created() {
    this.fetchResultNumbers();
  }
};
</script>

<style>
</style>