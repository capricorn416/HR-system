<template>
  <div>
    <head-bar></head-bar>
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
