<template>
  <section>
    <h1>Super 3</h1>
    <div class="drawDetails">
      ΚΛΗΡΩΣΗ
      <span>{{ super3WinningNumbers.drawId }}</span>
    </div>
    <div class="drawNumbers">
      <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
      <span v-for="(number, index) in super3WinningNumbers.numbers" :key="index">{{ number }}</span>
    </div>
    <div class="nextDrawTime">
      Επόμενη κλήρωση:
      <span>{{ super3WinningNumbers.nextDrawTime | date }}</span>
    </div>
  </section>
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

<style lang="scss" scoped>
section {
  h1 {
    color: #ffffff;
    background: #ea3128;
  }
  .drawNumbers {
    span {
      background: #ea3128;
      color: #ffffff;
    }
  }
}
</style>