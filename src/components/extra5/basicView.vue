<template>
  <div>
    <h1>Extra5 Basic view</h1>
    <div>
      Numbers:
      <span
        v-for="(number, index) in extra5WinningNumbers.numbers"
        :key="index"
      >{{ number }} -</span>
    </div>
    <div>drawId: {{ extra5WinningNumbers.drawId }}</div>
    <div>nextDrawTime: {{ extra5WinningNumbers.nextDrawTime | date }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "extra5FullView",
  computed: {
    ...mapGetters(["extra5WinningNumbers"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchExtra5ResultNumbers"
    })
  },
  created() {
    this.fetchResultNumbers();
  }
};
</script>

<style>
</style>