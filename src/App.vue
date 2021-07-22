<template>
  <div>
    <head-bar/>
    <router-view/>
  </div>
</template>

<script>
import HeadBar from './components/HeadBar.vue';
export default {
  components: { HeadBar },
  name: 'App',
  components: {
    HeadBar
  },
  data: () => ({
    //
  })
};
</script>
