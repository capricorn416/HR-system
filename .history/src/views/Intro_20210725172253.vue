<template>
    <div>
        <!-- 关于我们 -->
        <div class="main2">
            <div class="section">
                <!-- 在中等屏幕及以上呈现 -->
                <v-list v-for="(group, index) in groups" :key="group.team_title" class="card">
                    <!-- 奇偶行交叉呈现: 轮播图在左-->
                    <div v-if="index % 2 == 0">
                      <v-list-item class="section_item">
                          <v-card
                          flat
                          color="#F3F3F3"
                          height="435"
                          width="100%"
                          >
                          <v-row>
                            <!-- 轮播图部分 -->
                            <v-col cols="12" sm="6">
                              <div class="section_left" >
                                <div class="section_swiper">
                                <v-app>
                                  <v-carousel
                                    show-arrows-on-hover
                                    v-model="model" 
                                    height="274" 
                                    hide-delimiter-background
                                    cycle
                                    interval="3000"
                                    class="swiper"
                                  > 
                                    <v-carousel-item 
                                      v-for="(item,i) in group.img_urls"
                                      :key="i"
                                      :src="item"
                                    >
                                    </v-carousel-item>
                                  </v-carousel> 
                                </v-app>
                                </div>
                              </div>
                            </v-col>
                            <!-- 文字部分 -->
                            <v-col cols="12" sm="6">
                            <div class="section_right">
                              <div class="section_font">
                                <h1 class="section_font_header">
                                  {{ group.team_title }}
                                </h1>
                                <p class="section_font_info">
                                  {{ group.team_desc }}
                                </p>
                              </div>
                            </div>
                            </v-col>
                          </v-row>
                          </v-card>
                      </v-list-item>
                    </div>
                    <!-- 轮播图在右 -->
                    <div v-else>
                      <v-list-item class="section_item">
                          <v-card
                          flat
                          color="#F3F3F3"
                          height="435"
                          width="100%"
                          >
                          <v-row>
                            <!-- 文字部分 -->
                            <v-col cols="12" sm="6">
                              <div class="section_left" >
                                <div class="section_font">
                                  <h1 class="section_font_header">
                                    {{ group.team_title }}
                                  </h1>
                                  <p class="section_font_info">
                                    {{ group.team_desc }}
                                  </p>
                                </div>
                              </div>
                            </v-col>
                            <!-- 轮播图部分 -->
                            <v-col cols="12" sm="6">
                              <div class="section_right">
                                <div class="section_swiper">
                                <v-app>
                                  <v-carousel
                                    show-arrows-on-hover
                                    v-model="model" 
                                    height="274" 
                                    hide-delimiter-background
                                    cycle
                                    interval="3000"
                                    class="swiper"
                                  > 
                                    <v-carousel-item 
                                      v-for="(item,i) in group.img_urls"
                                      :key="i"
                                      :src="item"
                                    >
                                    </v-carousel-item>
                                  </v-carousel> 
                                </v-app>
                                </div>
                              </div>
                            </v-col>
                          </v-row>
                          </v-card>
                      </v-list-item>
                    </div>
                </v-list>

                <!-- 在小屏呈现 -->
                <v-list v-for="(group, index) in groups" :key="index" class="card_xs">
                    <v-list-item class="section_item">
                        <v-card
                        color="#F3F3F3"
                        height="435"
                        width="100%"
                        >
                        <!-- 轮播图在上，文字在下 -->
                        <v-row>
                          <!-- 轮播图部分 -->
                          <v-col cols="12" sm="6">
                            <div class="section_left" >
                              <div class="section_swiper">
                              <v-app>
                                <v-carousel
                                  show-arrows-on-hover
                                  v-model="model" 
                                  height="274" 
                                  hide-delimiter-background
                                  cycle
                                  interval="3000"
                                  class="swiper"
                                > 
                                  <v-carousel-item 
                                    v-for="(item,i) in group.img_urls"
                                      :key="i"
                                      :src="item"
                                  >
                                  </v-carousel-item>
                                </v-carousel> 
                              </v-app>
                              </div>
                            </div>
                          </v-col>
                          <!-- 文字部分 -->
                          <v-col cols="12" sm="6">
                            <div class="section_right">
                              <div class="section_font">
                                <h1 class="section_font_header">
                                  {{ group.team_title }}
                                </h1>
                                <p class="section_font_info">
                                  {{ group.team_desc }}
                                </p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                        </v-card>
                    </v-list-item>
                </v-list>
            </div>
        </div>

        <!-- 页尾 -->
        <div class="intro_footer">
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
        margin: 7% auto;
    }
    .section_item {
      margin-bottom: 153px;
    }
    .section_swiper {
      margin: 50px 40px 40px 40px;
      height: 274px;
    }
    .v-application--wrap {
      min-height: 0;
    }
    .section_font {
      margin-top: 40px;
      margin-left: 10%;
      margin-right: 10%;
    }
    .section_font_header {
      font: normal 400 48px 'Source Han Serif TC';
      color: #BDBDBD;
      line-height: 64px;
      margin-bottom: 20px;
    }
    .section_font_info {
      font: normal 400 16px 'Advent Pro';
      color: #000;
    }
    .card_xs {
      display: none;
    }
    .intro_footer {
      position: relative;
      height: 250px;
    }
    @media screen and (max-width: 600px) {
      .section_swiper {
        margin: 0;
        height: 200px;
      }
      .swiper {
        height: 200px!important;
      }
      .section_font {
        margin: -20px 20px 0 20px;
      }
      .section_font_header {
        font-size: 32px;
        margin-bottom: 0;
      }
      .section_font_info {
        font-size: 14px;
      }
      .card {
        display: none;
      }
      .card_xs {
        display: block;
      }
    }

</style>

<script>
import Bottom from '../components/Bottom.vue'
import {getGroupDesc} from '@/api/getDes'
export default {
    name: 'Intro',
    components: {
        Bottom 
    },
    data() {
        return {
            groups: [],
            model: 0,
        }
    },
    created() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        getGroupDesc().then((res) => {
          // console.log(res.data.msg)
          this.groups = res.data.msg;
        }).catch((err) => {
          // console.log(err)
        });
      }
    }
}
</script>