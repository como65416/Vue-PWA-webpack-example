<template>
  <div>
    <router-link to="/pageA">Page A</router-link>
    <router-link to="/pageB">Page B</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods : {
    },
    components: {
    }
  };
</script>
