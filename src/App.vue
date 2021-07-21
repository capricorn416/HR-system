<template>
  <div>
    <head-bar class="head"></head-bar>
    <router-view/>
  </div>
</template>

<script>
import HeadBar from 'components/HeadBar.vue'
export default {
  name: 'App',
  components: {
    HeadBar
  },
  data: () => ({
    //
  })
};
</script>
<style scoped>
 
</style>
