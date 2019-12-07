<template>
  <section>
    <h1>Proto</h1>
    <div class="drawDetails">
      ΚΛΗΡΩΣΗ
      <span>{{ protoWinningNumbers.drawId }}</span>
    </div>
    <div class="drawNumbers">
      <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
      <span v-for="(number, index) in protoWinningNumbers.numbers" :key="index">{{ number }}</span>
    </div>
    <div class="nextDrawTime">
      Επόμενη κλήρωση:
      <span>{{ protoWinningNumbers.nextDrawTime | date }}</span>
    </div>
  </section>
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

<style lang="scss" scoped>
section {
  h1 {
    color: #ffffff;
    background: #e41e26;
  }
  .drawNumbers {
    span {
      background: #104c8c;
      color: #ffffff;
    }
  }
}
</style>