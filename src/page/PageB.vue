<template>
  <div>
    Hello World !
    <component2></component2>
  </div>
</template>

<style scoped>
  div {
    color: red;
  }
</style>

<script>
  import Component2 from '../components/Component2.vue';

  export default {
    data() {
      return {};
    },
    methods : {
    },
    components: {
      component2: Component2
    }
  };
</script>