<template>
    <div>
        <!-- 关于我们 -->
        <div class="main2">
            <div class="section">
                <!-- 在中等屏幕及以上呈现 -->
                <v-list v-for="(group, index) in groups" :key="group.team_title" class="card">
                    <!-- 奇偶行交叉呈现: 轮播图在左-->
                    <div v-if="index % 2 == 0" class="even">
                      <v-list-item class="section_item">
                          <v-card
                          flat
                          color="#F3F3F3"
                          width="100%"
                          class="section_card"
                          >
                          <v-row>
                            <!-- 轮播图部分 -->
                            <v-col cols="12" sm="4">
                              <div class="section_left" >
                                <div class="section_swiper" >
                                <v-app>
                                  <v-carousel
                                    show-arrows-on-hover
                                    v-model="model" 
                                    hide-delimiter-background
                                    cycle
                                    height="100%"
                                    interval="3000"
                                    class="swiper"
                                    hide-delimiters
                                    :show-arrows="group.img_urls.length>1"
                                  > 
                                    <v-carousel-item 
                                      v-for="(item,i) in group.img_urls"
                                      :key="i"
                                      :src="item"
                                      height="100%"
                                    >
                                    </v-carousel-item>
                                  </v-carousel> 
                                </v-app>
                                </div>
                              </div>
                            </v-col>
                            <!-- 文字部分 -->
                            <v-col cols="12" sm="8">
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
                    <div v-else class="odd">
                      <v-list-item class="section_item">
                          <v-card
                          flat
                          color="#F3F3F3"
                          width="100%"
                          class="section_card"
                          >
                          <v-row>
                            <!-- 文字部分 -->
                            <v-col cols="12" sm="8">
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
                            <v-col cols="12" sm="4" align-self="end">
                              <div class="section_right">
                                <div class="section_swiper" style="float:right">
                                <v-app>
                                  <v-carousel
                                    show-arrows-on-hover
                                    v-model="model" 
                                    height="139" 
                                    hide-delimiter-background
                                    cycle
                                    interval="3000"
                                    class="swiper"
                                    hide-delimiters
                                    :show-arrows="group.img_urls.length>1"
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
                                  height="150" 
                                  hide-delimiter-background
                                  cycle
                                  interval="3000"
                                  class="swiper"
                                  hide-delimiters
                                  :show-arrows="group.img_urls.length>1"
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
        <bottom/>
    </div>

    
    
</template>

<style>
  .section_swiper{
    width: fit-content;
  }
    .main2 {
        position: relative;
        width: 100%;
        cursor: default;
    }
    .section {
        position: relative;
        width: 84%;
        margin: 134px auto;
    }
    .section_item {
      margin-bottom: 50px;
    }
    .section_card {
      padding: 49px 83px 44px 71px;
    }
    .even .section_font {
      margin-left: 47px !important;
    }
    .odd .section_font {
      margin-right: 47px !important;
    }
    .section_font_header {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      color: #535353;
      margin-bottom: 10px;
    }
    .section_font_info {
      font-family: Advent Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 25px;
      color: #A2A2A2;
    }
    .v-application--wrap {
      min-height: 0;
    }
    .section_left {
      text-align: right;
    }
    .card_xs {
      display: none;
    }
    @media screen and (max-width: 600px) {
      .section {
        margin-top: 50px;
      }
      .section_swiper {
        margin: 0;
        height: 150px;
      }
      .section_font {
        margin: -20px 15px 10px 15px;
      }
      .section_font_header {
        font-size: 18px;
        margin-bottom: 5px;
      }
      .section_font_info {
        font-size: 12px;
        line-height: 18px;
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
          this.groups = res.data.msg;
        }).catch((err) => {
          
        });
      }
    }
}
</script>