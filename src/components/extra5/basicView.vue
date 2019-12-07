<template>
  <section>
    <h1>Extra 5</h1>
    <div class="drawDetails">
      ΚΛΗΡΩΣΗ
      <span>{{ extra5WinningNumbers.drawId }}</span>
    </div>
    <div class="drawNumbers">
      <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
      <span v-for="(number, index) in extra5WinningNumbers.numbers" :key="index">{{ number }}</span>
    </div>
    <div class="nextDrawTime">
      Επόμενη κλήρωση:
      <span>{{ extra5WinningNumbers.nextDrawTime | date }}</span>
    </div>
  </section>
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

<style lang="scss" scoped>
section {
  h1 {
    color: #ffffff;
    background: #a8226f;
  }
  .drawNumbers {
    span {
      background: #a8226f;
      color: #ffffff;
    }
  }
}
</style>