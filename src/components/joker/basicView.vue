<template>
  <section>
    <h1>Joker</h1>
    <div class="drawDetails">
      ΚΛΗΡΩΣΗ
      <span>{{ jokerWinningNumbers.drawId }}</span>
    </div>
    <div class="drawNumbers">
      <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
      <span v-for="(number, index) in jokerWinningNumbers.numbers" :key="index">{{ number }}</span>
      <span class="joker">{{ jokerWinningNumbers.joker }}</span>
    </div>
    <div class="nextDrawTime">
      Επόμενη κλήρωση:
      <span>{{ jokerWinningNumbers.nextDrawTime | date }}</span>
    </div>
  </section>
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

<style lang="scss" scoped>
section {
  h1 {
    color: #ffc314;
    background: #104c8c;
  }
  .drawNumbers {
    span {
      background: #104c8c;
      color: #ffffff;
      &.joker {
        background: #ffc314;
        color: #104c8c;
      }
    }
  }
}
</style>