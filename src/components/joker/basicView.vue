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
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #c5c8d0;
  h1 {
    color: #ffc314;
    background: #104c8c;
    font-size: 40px;
    padding: 8px;
  }
  .drawDetails {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .drawNumbers {
    span {
      display: inline-block;
      background: #104c8c;
      color: #ffffff;
      padding: 4px;
      margin: 0px 3px;
      font-weight: bold;
      font-size: 22px;
      border-radius: 50%;
      width: 41px;
      text-align: center;
      &.joker {
        background: #ffc314;
        color: #104c8c;
      }
    }
  }
  .nextDrawTime {
    margin-top: 10px;
    font-size: 18px;
    span {
      font-weight: bold;
    }
  }
  h2 {
    font-size: 26px;
    font-weight: bold;
  }
}
</style>