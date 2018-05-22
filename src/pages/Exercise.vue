<template>
  <log-screen />
</template>

<script>
import LogScreen from "../components/LogScreen/LogScreen";
export default {
  name: "Exercise",
  props: ["exerciseId"],
  components: {
    LogScreen
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
