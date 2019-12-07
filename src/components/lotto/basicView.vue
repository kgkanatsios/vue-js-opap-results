<template>
  <section>
    <h1>Lotto</h1>
    <div class="drawDetails">
      ΚΛΗΡΩΣΗ
      <span>{{ lottoWinningNumbers.drawId }}</span>
    </div>
    <div class="drawNumbers">
      <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
      <span v-for="(number, index) in lottoWinningNumbers.numbers" :key="index">{{ number }}</span> +
      <span class="lotto">{{ lottoWinningNumbers.lotto }}</span>
    </div>
    <div class="nextDrawTime">
      Επόμενη κλήρωση:
      <span>{{ lottoWinningNumbers.nextDrawTime | date }}</span>
    </div>
  </section>
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

<style lang="scss" scoped>
section {
  h1 {
    color: #1d427c;
    background: #fedc00;
  }
  .drawNumbers {
    span {
      background: #fedc00;
      color: #333;
      &.lotto {
        background: #fedc00;
        color: #333;
        border: 1px solid #1d427c;
        padding: 3px 4px;
      }
    }
  }
}
</style>