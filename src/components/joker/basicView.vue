<template>
  <div>
    <h1>Joker Basic View</h1>
    <div>
      Numbers:
      <span v-for="(number, index) in jokerWinningNumbers.numbers" :key="index">{{ number }}</span>
    </div>
    <div>Joker: {{ jokerWinningNumbers.joker }}</div>
    <div>drawId: {{ jokerWinningNumbers.drawId }}</div>
    <div>Next Draw: {{ jokerWinningNumbers.nextDrawTime | date }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "jokerBasicView",
  computed: {
    ...mapGetters(["jokerWinningNumbers"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchJokerResultNumbers"
    })
  },
  created() {
    this.fetchResultNumbers();
  }
};
</script>

<style>
</style>