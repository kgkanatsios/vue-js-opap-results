<template>
  <b-container>
    <section>
      <b-row>
        <b-col>
          <h1>Joker</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawDetails">
            ΚΛΗΡΩΣΗ
            <span>{{ jokerWinningNumbers.drawId }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawNumbers">
            <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
            <span v-for="(number, index) in jokerWinningNumbers.numbers" :key="index">{{ number }}</span>
            <span class="joker">{{ jokerWinningNumbers.joker }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Κατηγορίες επιτυχιών</th>
                  <th scope="col">Διανεμόμενα</th>
                  <th scope="col">Επιτυχίες</th>
                  <th scope="col">Κέρδη ανά επιτυχία</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(jokerWinner, index) in jokerWinners" :key="index">
                  <td>
                    <span class="winnerType">{{ jokerWinner.type }}</span>
                  </td>
                  <td>{{ jokerWinner.totalEarnings | currency }}</td>
                  <td>{{ jokerWinner.winners }}</td>
                  <td>{{ jokerWinner.divident | currency }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="nextDrawTime">
            Επόμενη κλήρωση:
            <span>{{ jokerWinningNumbers.nextDrawTime | date }}</span>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "jokerFullView",
  computed: {
    ...mapGetters(["jokerWinningNumbers", "jokerWinners"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchJokerResultNumbers",
      fetchWinners: "fetchJokerWinners"
    })
  },
  created() {
    this.fetchResultNumbers();
    this.fetchWinners();
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
  .table {
    tr {
      span.winnerType {
        background: #104c8c;
        color: #ffffff;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
      }
    }
  }
}
</style>