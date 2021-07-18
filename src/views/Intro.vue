<template>
    <div>
        <div class="main2">
            <div class="section">
                <v-list v-for="(group, index) in groups" :key="index">
                    <v-list-item class="section_item">
                        <v-card
                        flat
                        color="#FBFBFB"
                        height="435"
                        width="100%"
                        >
                          <div class="section_left">
                            <div class="section_swiper">
                            <v-app>
                              <v-carousel
                                show-arrows-on-hover
                                v-model="model" 
                                height="274" 
                                hide-delimiter-background
                                cycle
                                interval="3000"
                              > 
                                <v-carousel-item 
                                  v-for="(item,i) in items"
                                  :key="i"
                                  :src="item.src"
                                >
                                </v-carousel-item>
                              </v-carousel> 
                            </v-app>
                            </div>
                          </div>
                          <div class="section_right">
                            <div class="section_font">
                              <h1 class="section_font_header">
                                {{ group.name }}
                              </h1>
                              <p class="section_font_info">
                                {{ group.info }}
                              </p>
                            </div>
                          </div>
                        
                        </v-card>
                    </v-list-item>
                </v-list>
            </div>
        </div>
        <div class="bottom">
          <bottom/>
        </div>
    </div>

    
    
</template>

<style>
    .main2 {
        position: relative;
        width: 100%;
    }
    .section {
        position: relative;
        width: 84%;
        margin: 104px auto;
    }
    .section_item {
      margin-bottom: 153px;
    }
    .section_left {
      float: left;
      width: 50%;
    }
    .section_right {
      float: right;
      width: 50%;
    }
    .section_swiper {
      margin-top: 40px;
      margin-left: 40px;
      height: 274px;
    }
    .v-application--wrap {
      min-height: 0;
    }
    .section_font {
      margin-top: 30px;
      margin-left: 117px;
    }
    .section_font_header {
      font: normal 400 48px 'Source Han Serif TC';
      color: #BDBDBD;
      line-height: 64px;
    }
    .section_font_info {
      font: normal 400 16px 'Advent Pro';
      color: #000;
      margin-top: 20px;
    }
    .bottom {
      position: relative;
      height: 250px;
    }

</style>

<script>
import Bottom from '../components/Bottom.vue'
export default {
    name: 'Intro',
    components: {
        Bottom 
    },
    data() {
        return {
            groups: [{
                name: '产品组',
                info: '1111111111'
            },
            {
                name: '设计组',
                info: '2222222222'
            },
            {
                name: '运营组',
                info: '3333333333'
            },
            {
                name: '前端组',
                info: '3333333333'
            },
            {
                name: '后端组',
                info: '3333333333'
            },
            {
                name: '移动组',
                info: '3333333333'
            }
            ],
            model: 0,
            colors: [
              'primary',
              'secondary',
              'yellow darken-2',
              'red',
              'orange',
            ],items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          }
        ],
        }
    }
}
</script>