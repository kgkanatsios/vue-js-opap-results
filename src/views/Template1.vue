<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <joker-basic-view></joker-basic-view>
      </b-col>
      <b-col>
        <lotto-basic-view></lotto-basic-view>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <proto-basic-view></proto-basic-view>
      </b-col>
      <b-col>
        <extra5-basic-view></extra5-basic-view>
      </b-col>
      <b-col>
        <super3-basic-view></super3-basic-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import jokerBasicView from "@/components/joker/basicView.vue";
import lottoBasicView from "@/components/lotto/basicView.vue";
import protoBasicView from "@/components/proto/basicView.vue";
import extra5BasicView from "@/components/extra5/basicView.vue";
import super3BasicView from "@/components/super3/basicView.vue";

export default {
  name: "template1",
  components: {
    jokerBasicView,
    lottoBasicView,
    protoBasicView,
    extra5BasicView,
    super3BasicView
  }
};
</script>

<style lang="scss">
.row {
  margin-bottom: 15px;
}
section {
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #c5c8d0;
  h1 {
    color: #ffffff;
    background: #426fad;
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
      background: #426fad;
      color: #ffffff;
      padding: 4px;
      margin: 0px 3px;
      font-weight: bold;
      font-size: 22px;
      border-radius: 50%;
      width: 41px;
      text-align: center;
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
</style>>