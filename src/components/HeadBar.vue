<template>
  <v-app>
    <v-app-bar
      color="#FFF"
      height="99"
      flat
     
    >
      <div>
        <v-img
          class="logo"
          contain
          src="~assets/img/home/PivotStudio_Logo_Full_Horizontal.png"
          transition="scale-transition"
          width="120"
          height="50"
        />
      </div>

      <ul class="tab">
        <li class="tab-item isSelected" @click="gotoHome">招新首页</li>
        <li class="tab-item" @click="gotoIntro">部门介绍</li>
        <li class="tab-item tab-item-right" @click="gotoAbout">关于我们</li>
      </ul> 
      <!-- <div class="tab">
        <v-tab class="tab-item">招新首页</v-tab>
        <v-tab class="tab-item">部门介绍</v-tab>
        <v-tab class="tab-item">关于我们</v-tab>
      </div>  
         -->




    </v-app-bar>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    gotoHome() {
      this.$router.push({ path: '/' });
    },
    gotoIntro() {

    },
    gotoAbout() {
      this.$router.push({ path: '/aboutus' });
    }
  }
};
</script>

<style scoped>
  .logo {
    position: absolute;
    left: 61px;
    top: 29px;
  }

  .tab {
    position: absolute;
    left: 562px;
    width: 500px;
    color: black;
  }
  .tab-item {
    display: inline-block;
    width: 68px;
    padding: 2px 3px 2px 2px;
    margin-right: 66px;
    text-align-last: justify;
    font: normal 400 14px "Source Han Serif SC";
    outline: none;
    cursor: pointer;
  }

  .isSelected {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
</style>
