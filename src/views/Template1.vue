<template>
  <div>
    <joker-basic-view></joker-basic-view>
    <lotto-basic-view></lotto-basic-view>
    <proto-basic-view></proto-basic-view>
    <extra5-basic-view></extra5-basic-view>
    <super3-basic-view></super3-basic-view>
  </div>
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