<template>
  <b-container>
    <section>
      <b-row>
        <b-col>
          <h1>Super 3</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawDetails">
            ΚΛΗΡΩΣΗ
            <span>{{ super3WinningNumbers.drawId }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawNumbers">
            <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
            <span v-for="(number, index) in super3WinningNumbers.numbers" :key="index">{{ number }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col" colspan="2">Κατηγορίες επιτυχιών</th>
                  <th scope="col">Διανεμόμενα</th>
                  <th scope="col">Επιτυχίες</th>
                  <th scope="col">Κέρδη ανά επιτυχία</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(super3Winner, index) in super3Winners" :key="index">
                  <td>
                    <span class="winnerType">{{ index }}</span>
                  </td>
                  <td>{{ super3Winner.type }}</td>
                  <td>{{ super3Winner.totalEarnings | currency }}</td>
                  <td>{{ super3Winner.winners }}</td>
                  <td>{{ super3Winner.fixed | currency }}</td>
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
            <span>{{ super3WinningNumbers.nextDrawTime | date }}</span>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "super3FullView",
  computed: {
    ...mapGetters(["super3WinningNumbers", "super3Winners"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchSuper3ResultNumbers",
      fetchWinners: "fetchSuper3Winners"
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
    background: #ea3128;
  }
  .drawNumbers {
    span {
      background: #ea3128;
      color: #ffffff;
    }
  }
  .table {
    tr {
      span.winnerType {
        background: #034f9d;
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