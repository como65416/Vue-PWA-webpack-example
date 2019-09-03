<template>
  <div>
    this is component2
    <button @click="method1">Click Me</button>
  </div>
</template>

<style scoped>
</style>

<script>
  import DemoUtil from "../libs/DemoUtil";

  export default {
    data() {
      return {};
    },
    methods : {
      method1: function() {
        alert(DemoUtil.hi('alice'));
      }
    },
    components: {
    }
  };
</script>