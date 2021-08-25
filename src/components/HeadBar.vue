<template>
  <v-app class="head">
    <v-app-bar
      color="#FFF"
      height="99"
      flat
     
    >
      <!-- logo -->
      <div>
        <v-img
          class="logo"
          contain
          src="~assets/img/home/PivotStudio_Logo_Full_Horizontal.png"
          transition="scale-transition"
          @click="gotoPages(0)"
        />
      </div>

      <!-- 导航部分 -->
      <div class="tab">
        <v-tab v-for="(item, index) in pages" :key="index" class="tab-item" @click="gotoPages(index)"
        :class="{isSelected: isActive(index)}">
          {{ item.name }}
        </v-tab>
      </div>
      
      <!-- 导航部分(适配手机) -->
      <div class="tab_xs">
          <v-menu
            bottom
            left
          >          
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="plus">mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in pages"
                :key="index"
                @click="gotoPages(index)"
              >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </div>  
    </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    pages:[
      {name: '招新首页', path: '/'},
      {name: '部门介绍', path: '/intro'},
      {name: '关于我们', path: '/about'}
    ],
  }),
  computed: {
    isActive() {
      return function(index) {
        return this.$route.path === this.pages[index].path;
      }
    }
  },
  methods: {
    
    gotoPages(index) {
      this.$router.push({ path: this.pages[index].path });
    }
  }
};
</script>

<style scoped>
  .head {
    height: 69px;
  }
  .logo {
    position: absolute;
    left: 61px;
    top: 14px;
    width: 120px;
    cursor: pointer;
  }

  .tab {
    position: absolute;
    left: 39.03%;
    width: 500px;
    top: 27px;
    color: black;
  }
  .tab-item {
    outline: none;
    display: inline-block;
    width: 68px;
    padding: 2px 2px 2px 4px;
    margin-right: 66px;
    text-align-last: justify;
    color: #333333;
    font: normal 400 14px "Source Han Serif SC";
    cursor: pointer;
  }
  .tab_xs {
    position: absolute;
    right: 5%;
    top: 12px;
    display: none;
  }
  .isSelected {
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
  }
  @media screen and (max-width: 767px) {
    .logo {
      height: 40px;
      left: 10%;
    }
    .tab {
      display: none;
    }
    .tab_xs {
      display: block;
    }
  }

</style>


