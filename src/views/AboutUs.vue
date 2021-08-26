<template>
  <v-app>
    <v-container fill-height>
      <v-row align="center"
      justify="center" class=" mt-16 mb-16">
        <v-col cols="12" offset="0" offset-sm="0" sm="7" >
          <div class=" text-h6" > PIVOT STUDIO成立于2020年11月，是⼀个创意驱动、怀抱好奇、充满热情的校园互联网团队， 我们专注于开发创意丰富、设计简约、体验⼀流的校园产品。</div>
        </v-col>
        <v-col cols="12" sm="3" class=" text-center">
          <v-avatar size="180" >
            <v-img src="../assets/img/AboutUs/PivotStudio_Logo_Squre_Solid_W-10.png" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row class="mt-16 text-h4">
        <v-col offset-sm="1" offset="0">
        我们做了什么？
        </v-col>
      </v-row>
      <v-row
        class=" pa-10"
        align="center"
        justify="center"
        v-for="(item, index) in datalist"
        :key="index">
        <v-card color="#F3F3F3" width="100%" :class="{'pa-10':$vuetify.breakpoint.smAndUp}" class=" pt-10" >
          <v-row align="center"
            justify="center">
            <v-col sm="4" cols="12" class=" text-center">
              <v-tooltip :disabled="item.img_urls.length===0" color="white" right >
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar size="180" tile
                    v-bind="attrs"
                    v-on="on"
                  ><v-img :src="item.logo_url"/></v-avatar>
                </template>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-img :src="item.img_urls[0]"/>
                    </v-col>
                    <v-col>
                      <v-img :src="item.img_urls[1]"/>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tooltip>
              
            </v-col>
            <v-col sm="8" cols="12">
              <v-card-title>{{item.product_title}}</v-card-title>
              <v-card-text>{{item.product_desc}}</v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row align="center"
      justify="center" class="mt-16">
        <v-col offset-sm="1" offset="0" class=" text-h4">
        想要联系我们？
        </v-col>
      </v-row>
      <v-row align="center"
      justify="center">
        <v-col offset-sm="1" offset="0" class=" text-h5 subtitle-1">
        TEAM@PIVOTSTUDIO.CN
        </v-col>
      </v-row>
      <v-row align="center"
      justify="center">
        <v-col sm="4" cols="12" class="subtitle-1"
         :class="{'mr-5':$vuetify.breakpoint.smAndUp,'ma-5':!$vuetify.breakpoint.smAndUp}">
          <v-container>
            <v-row>
              <v-img src="../assets/img/AboutUs/downimage 1.png"/>
            </v-row>
            <v-row class=" subtitle-1 text-center">
              QQ扫一扫，加入招新群
            </v-row>
          </v-container>
        </v-col>
        <v-col sm="4" cols="12" class="subtitle-1"
         :class="{'ml-5':$vuetify.breakpoint.smAndUp,'ma-5':!$vuetify.breakpoint.smAndUp}">
          <v-container>
          <v-row>
            <v-img src="../assets/img/AboutUs/downimage 1.png"/>
          </v-row>
          <v-row class=" subtitle-1 text-center">
            微信扫码关注我们的公众号
          </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="js">
import Vue from "vue";
// import Component from "vue-class-component";
import { defineComponent } from "@vue/composition-api";

import {getProductDesc} from '@/api/getDes'
import  Bottom from "../components/Bottom.vue";
export default defineComponent({
  name: "AboutUs",

  components: {
    Bottom,
    
  },

  data() {
    return {
     status: true,
      datalist:[],
         isSeen: false,
      current: 0
    };
  },
  created() {
      this.getMsg()
    },
    methods: {
      getMsg() {
        var datalist=[];
        getProductDesc().then((res) => {
          console.log(res.data.msg)
          this.datalist = res.data.msg;
        }).catch((err) => {
          // console.log(err)
        }),

        function  ObjStory(type ,boolean) //声明对象
     {
        
        this.show ==Boolean(type);
        this.display == Boolean(boolean);
     },

        function push(){
          this.status = !this.status
          this.datalist[0].push(new  ObjStory (1,0));
          
         this.datalist[1].push(new  ObjStory (1,0));
         
      }
      
      },
      enter(index){
         this.isSeen = true;
         this.current = index;
        //  item.display=true;
        //  console.log(item.display);
       },
       leave(){
         this.isSeen = false;
        this.current = null;
        //  item.display=false;
        //  console.log(item.display);
       }  
    }
});
</script>

<style scoped>
</style>
