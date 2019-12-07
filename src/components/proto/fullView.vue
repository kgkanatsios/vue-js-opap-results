<template>
  <b-container>
    <section>
      <b-row>
        <b-col>
          <h1>Proto</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawDetails">
            ΚΛΗΡΩΣΗ
            <span>{{ protoWinningNumbers.drawId }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawNumbers">
            <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
            <span v-for="(number, index) in protoWinningNumbers.numbers" :key="index">{{ number }}</span>
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
                  <th scope="col">Αριθμοί</th>
                  <th scope="col">Επιτυχίες</th>
                  <th scope="col">Κέρδη ανά επιτυχία</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(protoWinner, index) in protoWinners" :key="index">
                  <td>
                    <span class="winnerType">{{ protoWinner.type }}</span>
                  </td>
                  <td>{{ protoWinner.totalEarnings | currency }}</td>
                  <td>{{ protoWinner.numbers | fillTable}}</td>
                  <td>{{ protoWinner.winners }}</td>
                  <td>{{ protoWinner.divident | currency }}</td>
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
            <span>{{ protoWinningNumbers.nextDrawTime | date }}</span>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "protoFullView",
  computed: {
    ...mapGetters(["protoWinningNumbers", "protoWinners"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchProtoResultNumbers",
      fetchWinners: "fetchProtoWinners"
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
    color: #ffffff;
    background: #e41e26;
  }
  .drawNumbers {
    span {
      background: #104c8c;
      color: #ffffff;
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