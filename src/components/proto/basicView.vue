<template>
  <div>
    <h1>Proto Basic View</h1>
    <div>
      Numbers:
      <span v-for="(number, index) in protoWinningNumbers.numbers" :key="index">{{ number }}</span>
    </div>
    <div>drawId: {{ protoWinningNumbers.drawId }}</div>
    <div>nextDrawTime: {{ protoWinningNumbers.nextDrawTime | date }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "protoBasicView",
  computed: {
    ...mapGetters(["protoWinningNumbers"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchProtoResultNumbers"
    })
  },
  created() {
    this.fetchResultNumbers();
  }
};
</script>

<style>
</style>