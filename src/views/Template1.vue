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

<style>
</style>