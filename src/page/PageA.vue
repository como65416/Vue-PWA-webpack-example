<template>
  <div>
    Hello World !
    <component1></component1>
  </div>
</template>

<style scoped>
  div {
    color: blue;
  }
</style>

<script>
  import Component1 from '../components/Component1.vue';

  export default {
    data() {
      return {};
    },
    methods : {
    },
    components: {
      component1: Component1
    }
  };
</script>