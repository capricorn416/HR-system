<template>
  <div>
    <head-bar></head-bar>
    <div class="poster"></div>
    <subheaders class="ps">Pivot Studio<br/>{{time}}</subheaders>
    <button class="join" @click="gotoRegister">JOIN US</button>
  </div>
  <!-- <v-img 
    src="~assets/img/home/poster.png"
    style="backgroundSize: 100% 100%;">
  </v-img> -->

</template>

<script>
  import HeadBar from 'components/HeadBar.vue'
  export default {
    name: 'Home',

    components: {
      HeadBar
    },
    data() {
      return {
        time: "2021秋季招新"
      }
    },
    methods: {
      gotoRegister() {
        this.$router.push({ path: '/register' });
      }
    }
  }
</script>

<style>
  .poster {
    position: fixed;
    top: 99px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    background-image: url("../assets/img/home/poster.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-size: auto 100%;
    background-position: center; 
  }

  .ps {
    position: fixed;
    top: 39%;
    left: 15%;
    color: white;
    font: normal 400 48px "Source Han Serif TC";
  }

  .join {
    position: fixed;
    top: 72%;
    left: 20%;
    color: white;
    font: normal 700 64px "Source Han Serif TC";
    outline: none;
  }
</style>
