<template>
  <b-container>
    <section>
      <b-row>
        <b-col>
          <h1>Lotto</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawDetails">
            ΚΛΗΡΩΣΗ
            <span>{{ lottoWinningNumbers.drawId }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawNumbers">
            <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
            <span v-for="(number, index) in lottoWinningNumbers.numbers" :key="index">{{ number }}</span> +
            <span class="lotto">{{ lottoWinningNumbers.lotto }}</span>
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
                <tr v-for="(lottoWinner, index) in lottoWinners" :key="index">
                  <td>
                    <span class="winnerType">{{ lottoWinner.type }}</span>
                  </td>
                  <td>{{ lottoWinner.totalEarnings | currency }}</td>
                  <td>{{ lottoWinner.winners }}</td>
                  <td>{{ lottoWinner.divident | currency }}</td>
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
            <span>{{ lottoWinningNumbers.nextDrawTime | date }}</span>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "lottoFullView",
  computed: {
    ...mapGetters(["lottoWinningNumbers", "lottoWinners"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchLottoResultNumbers",
      fetchWinners: "fetchLottoWinners"
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
  .table {
    tr {
      span.winnerType {
        background: #1d427c;
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