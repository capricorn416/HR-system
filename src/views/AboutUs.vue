<template>
  <v-app>
    <v-container fill-height>
      <v-row align="center"
      justify="center" class="mt-16 mb-16" :style="$vuetify.breakpoint.smAndUp?'margin-top:200px!important':''">
        <v-col cols="12" offset="0" offset-sm="1" sm="6" >
          <div class=" first-content" > Pivot Studio成立于2020年11月，是⼀个创意驱动、怀抱好奇、充满热情的校园互联网团队， 我们专注于开发创意丰富、设计简约、体验⼀流的校园产品。</div>
        </v-col>
        <v-col cols="12" sm="3" class=" text-center ">
          <v-avatar size="107" >
            <v-img src="../assets/img/AboutUs/PivotStudio_Logo_Squre_Solid_W-10.png" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row class="mt-16 text-h4 ">
        


        <v-col offset-sm="1" offset="0" class="sec-title">
        <button @click="gotoContent">
            <v-icon large color="black"> mdi-chevron-down</v-icon>   
          </button>
        我们做了什么？
        </v-col>
      </v-row>
      <v-row
        class=" pa-10 pb-0"
        align="center"
        justify="center"
        v-for="(item, index) in datalist"
        :key="index">
        <v-card :color="colors[index]" width="100%" :class="{'pa-10':$vuetify.breakpoint.smAndUp}" class=" pt-10" flat>
          <v-row align="center"
            justify="center" >
            <v-col sm="3" cols="12" class=" text-center">
              <v-tooltip :disabled="item.img_urls.length===0" color="transparent" right >
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar size="180" tile
                  style=" min-width:0px"
                  class=" avater"
                    v-bind="attrs"
                    v-on="on"
                  ><v-img :src="item.logo_url"/></v-avatar>
                </template>
                <v-container>
                  <v-row>
                    <v-col>
                      <div class="triangle"></div>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container class="dialog">
                  <v-row>
                    <v-col color="black">
                      <v-img class="img" :src="item.img_urls[0]"/>
                       <v-card-text class="tips">小程序</v-card-text>
                    </v-col>
                   
                    <v-col>
                      <v-img class="img" :src="item.img_urls[1]"/>
                      <v-card-text class="tips">QQ社群</v-card-text>
                    </v-col>

                    <v-col>
                      <v-img class="img" src="../assets/img/AboutUs/download-url.png"/>
                      <v-card-text class="tips">下载链接</v-card-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tooltip>
              
            </v-col>
            <v-col sm="6" cols="12" >
              <v-card-title class="pro-title" v-html="item.product_title"></v-card-title>
              <v-card-text class="pro-text" v-html="item.product_desc"></v-card-text>
            </v-col>
            <v-col sm="3" cols="12" class="text-center" :class="$vuetify.breakpoint.xsOnly? 'mb-8 mt-n5': null">
              <v-btn height="38" dark v-if="index===0" @click="gotoDownload">下载链接</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-row>


      <v-row align="center"
      justify="center" class="mt-16 center">
       
        <v-col offset-sm="1" offset="0" class=" text-h4 third-title  ">
            <button @click="gotoCode">
            <v-icon large color="black">mdi-chevron-down</v-icon>   
            </button>
        想要联系我们？
        </v-col>
        </v-row>
        <v-row align="center"
          justify="center">
          <v-col offset-sm="1" offset="0" class=" link">
           邮箱：team@pivotstudio.cn
           </v-col>
        </v-row>
        <v-container>
        <v-row :style="$vuetify.breakpoint.smAndUp?'width:60%':''">
        <v-col sm="2" cols="6" offset-sm="2" offset="0"
         class="bottom "
         style="max-width:155px"
         :class="{'pr-5':$vuetify.breakpoint.smAndUp}">
          <v-container >
            <v-row>
              <v-img  src="../assets/img/AboutUs/downimage 1.png"/>
            </v-row>
            <v-row class=" p1 text-center">
              <v-col> 招新QQ群</v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col sm="2" cols="6"  offset-sm="0" offset="0" style="max-width:155px"
          
         :class="{'pl-5':$vuetify.breakpoint.smAndUp}">
          <v-container>
          <v-row>
            <v-img  src="../assets/img/AboutUs/downQR.png"/>
          </v-row>
          <v-row class=" p1 text-center ">
            <v-col> PS公众号</v-col>
          </v-row>
          </v-container>
        </v-col>
        </v-row>
        </v-container>
      
      
    </v-container>
    <v-row>
        <v-col class="pa-0">
          <bottom/>
          </v-col>
          </v-row>
  </v-app>
</template>
<script lang="js">
import Vue from "vue";
// import Component from "vue-class-component";
import { defineComponent } from "@vue/composition-api";

import {getProductDesc} from '@/api/getDes'
import  Bottom from "../components/Bottom.vue";
export default 
  {
    components: { Bottom },
  name: "AboutUs",

  
  data() {
    return {
     status: true,
      datalist:[],
      isSeen: false,
      current: 0,
      colors: ['#F3F8F2', '#FDF6FC']
    };
  },
  created() {
      this.getMsg()
    },
    methods: {
       gotoDownload() {
         this.$router.push('/download')
       },
       gotoContent() { 
        let scroll1 = document.querySelector('.sec-title').offsetTop + 20;
        　
        window.scrollTo({
          top: scroll1,
          behavior: 'smooth'
        })
        },
        gotoCode() { 
        let scroll2 = document.querySelector('.third-title').offsetTop + 10;
        　
        window.scrollTo({
          top: scroll2,
          behavior: 'smooth'
        })
        },

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
};
</script>

<style scoped>
/* .container{
  margin: 0;
} */
::v-deep 
.col-sm-4, .col-sm-6 {
  display: block !important;
}
::v-deep 
.v-application--wrap {
  min-height: 0;
}
.first-content{
   float: left;
   
  font-family: "Source Han Serif SC";
  font-size: 18px;
 line-height: 37px;
  color: #757575;
  letter-spacing: 0.105em;
}
.card{
  width: 1400px!important;
  min-height: 268px;

}
.sec-title{
  font-size: 24px;
line-height: 12px;
font-family: Segoe UI;
}
.pro-text{
 width: 90%;
 margin-left: 15%;
font-family: Segoe UI;
font-size: 16px;
line-height: 30px;
color: #4E4E4E;
}
.pro-title{
 margin-left: 15%;
 margin-bottom: 10px;
  font-family: Segoe UI;
font-weight: bold;
font-size: 24px;
line-height: 10px;
color: #4E4E4E;
}
.dialog{
  position: absolute;
  left: 40px;
 top: -80px;
width: 470px;
height: 190px;
background: #FFFFFF;
box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 12px;
}
.dialog .img{
  width: 130px;
  height: 130px;
  top: 10px;
}
.dialog .tips{
  margin: 6px 0  0 23px;
  top: 10px;
  font-family: Source Serif Pro;
font-size: 14px;
line-height: 12px;
letter-spacing: 0.1em;
color: #8D8D8D;
}
.triangle{
  position: absolute;
    border: 21px solid;
    left: -3px;
    top: 0px;
    border-color: transparent #FFF  transparent transparent;
  }
  .third-title
  { margin-top: 100px;
    font-family: Segoe UI;
font-size: 24px!important;
line-height: 12px;
text-transform: uppercase;

color: #000000;

  }
  .link{
    margin-top: -10px;
 padding-left: 53px;
 font-family: Segoe UI;
font-weight: 350;
font-size: 18px;
line-height: 64px;
color: #757575;
  }

  .bottom{
    height: 400px;
    margin-right: 60px!important;
  }
  .p1{
font-family: Segoe UI;
font-weight: 350;
font-size: 14px;

color: #757575
  }
  
@media (min-width: 1264px)
{
.container {
    max-width: 1400px;
}

}

@media (max-width: 600px)
{
.fir-box{
  height: 150px;
}
.first-content{
  font-size: 14px;
  margin-top: 40px;
}
.first-logo{
  margin-top: 17%;
  margin-left: 36%;
}
.bottom{
margin-right: 0px!important;
}


.p1{
  margin-left: 0px!important;
}
.pro-text{
width: 100%;
font-size: 14px;
margin-left: 0px;
}
.pro-title{
  width: 129px;
  margin: 0 auto;
  font-size: 18px;
}
.avater{
  width: 110px!important;
  height: 110px!important;
}
.dialog{
  left: -230px;
  top: 100px;
  width: 340px;
  height: 145px;
}
.dialog .img {
  width: 85px;
  height: 85px;
}
.dialog .tips{
  margin: 3px 0  0 0px;
  font-size: 12px;
}
.triangle{
  position: absolute;
    border: 19px solid;
    left: -82px;
    top: 62px;
    border-color: transparent transparent  #FFF transparent;
}
}
</style>
