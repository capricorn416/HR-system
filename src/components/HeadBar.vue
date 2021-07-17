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
      <div class="tab">
        <v-tab v-for="(item, index) in pages" :key="index" class="tab-item" @click="gotoPages(index)"
        :class="{isSelected: index === currentIndex}">
          {{ item }}
        </v-tab>
      </div>  
    </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    pages:[
      '招新首页',
      '部门介绍',
      '关于我们'
    ],
    currentIndex: 0
  }),
  methods: {
    gotoPages(index) {
      this.currentIndex = index;
      switch(index) {
        case 0:
          this.$router.push({ path: '/' });
          break;
        case 1:
          this.$router.push({ path: '/introduction' });
          break;
        case 2:
          this.$router.push({ path: '/about' });
          break;
      }
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
    /* padding: 2px 3px 2px 2px; */
    padding: 2px 2px 2px 4px;
    margin-right: 66px;
    text-align-last: justify;
    color: #333333;
    font: normal 400 14px "Source Han Serif SC";
    /* outline: none;
    cursor: pointer; */
  }

  .isSelected {
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
  }
</style>
