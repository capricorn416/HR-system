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

<style>
  /* chrome和safari */
  html::-webkit-scrollbar {
    display: none;
  }
  
  html {
    /* FireFox */
    scrollbar-width: none;
    /* IE */
    -ms-overflow-style: none;
  }
</style>