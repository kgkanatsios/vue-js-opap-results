<template>
  <div>
    <h1>Super3 Basic View</h1>
    <div>
      Numbers:
      <span
        v-for="(number, index) in super3WinningNumbers.numbers"
        :key="index"
      >{{ number }}</span>
    </div>
    <div>drawId: {{ super3WinningNumbers.drawId }}</div>
    <div>nextDrawTime: {{ super3WinningNumbers.nextDrawTime | date }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "super3BasicView",
  computed: {
    ...mapGetters(["super3WinningNumbers"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchSuper3ResultNumbers"
    })
  },
  created() {
    this.fetchResultNumbers();
  }
};
</script>

<style>
</style>