<template>
  <div class="st1">
    this is component1
    <button @click="method1">Click Me</button>
  </div>
</template>

<style scoped>
  .st1 {
    font-size:30px;
  }
</style>

<script>
  import DemoUtil from "../libs/DemoUtil";

  export default {
    data() {
      return {};
    },
    methods : {
      method1: function() {
        alert(DemoUtil.hi('bob'));
      }
    },
    components: {
    }
  };
</script>