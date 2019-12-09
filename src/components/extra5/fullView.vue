<template>
  <b-container>
    <section>
      <b-row>
        <b-col>
          <h1>Extra 5</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawDetails">
            ΚΛΗΡΩΣΗ
            <span>{{ extra5WinningNumbers.drawId }}</span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="drawNumbers">
            <h2>ΝΙΚΗΤΡΙΑ ΣΤΗΛΗ</h2>
            <span v-for="(number, index) in extra5WinningNumbers.numbers" :key="index">{{ number }}</span>
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
                <tr v-for="(extra5Winner, index) in extra5Winners" :key="index">
                  <td>
                    <span class="winnerType">{{ index }}</span>
                  </td>
                  <td>{{ extra5Winner.type }}</td>
                  <td>{{ extra5Winner.totalEarnings | currency }}</td>
                  <td>{{ extra5Winner.winners }}</td>
                  <td>{{ extra5Winner.fixed | currency }}</td>
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
            <span>{{ extra5WinningNumbers.nextDrawTime | date }}</span>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "extra5FullView",
  computed: {
    ...mapGetters(["extra5WinningNumbers", "extra5Winners"])
  },
  methods: {
    ...mapActions({
      fetchResultNumbers: "fetchExtra5ResultNumbers",
      fetchWinners: "fetchExtra5Winners"
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
    background: #a8226f;
  }
  .drawNumbers {
    span {
      background: #a8226f;
      color: #ffffff;
    }
  }
  .table {
    tr {
      span.winnerType {
        background: #a8226f;
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