<template>

  <div>
    <head-bar/>
    <div class="main">
    <div class="center">
      <div class="first">
        <div class="first-content">
          团队介绍文案（暂定2020秋招文案）（待与运营对接）<br />
          Pivot
          Studio成立于2020年11月，是⼀个创意驱动、怀抱好奇、充满热情的校园互联网团队，
          我们专注于开发创意丰富、设计简约、体验⼀流的校园产品。
        </div>
        <img
          src="../assets/img/AboutUs/PivotStudio_Logo_Squre_Solid_W-10.png"
        />
      </div>

      
      <div class="second">
        <div class="content">我们做了什么？</div>
        <div class="box">
         
          <div
            v-for="(item, index) in datalist"
            :key="index"
            class="item"
            :style="{ backgroundcolor: item.color }"
            
          >
            <div
              class="avater"
               @mouseover="enter"
               @mouseout="leave"
            >
            
              
              <img :src="item.pic" />
            </div>
            <div class="dialog" v-show="show">
              <img :src="item.img1" class="i1" alt="img1" />
              <p class="up">小程序</p>
              <img :src="item.img2" class="i2" alt="img2" />
              <p class="down">QQ社群</p>
            </div>

            <div class="passage">
              <p class="title">{{ item.title }}</p>
              <p class="slogan" v-html="item.slogan"></p>
              <p class="pcontent">{{ item.content }}</p>
            </div>
          </div>

          
        </div>
     
      </div>

      <div class="third">
        <div class="email">
            <p> 想要联系我们？</p>
            TEAM@PIVOTSTUDIO.CN
        </div>
        <div class="code">
          
            <img src="../assets/img/AboutUs/downimage 1.png" alt="img1" >
             <p class="p1">QQ扫一扫，加入招新群</p>
            <img src="../assets/img/AboutUs/downQR.png" class="two"  alt="img2">
            <p class="p2">微信扫码关注我们的公众号</p>
        </div>
      </div>

         <div class="bottom">
          <bottom/>
         </div>
    </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import Component from "vue-class-component";
import { defineComponent } from "@vue/composition-api";
import HeadBar from "components/HeadBar.vue";
import  Bottom from "../components/Bottom.vue";
export default defineComponent({
  name: "AboutUs",

  components: {
    HeadBar,
    Bottom,
  },
  methods: {
       enter()    {
         this.show=true;
       }    ,
       leave(){
         this.show=false;
       }     
  },

  data() {
    return {
      show:false,
      datalist: [
        {
          pic: require("../assets/img/AboutUs/方形Logo 1.png"),
          color: "#ECF0F1",
          title: "1037树洞",
          slogan: "——有时治愈，时常帮助，总是倾听 ",
          content:
            "HUSTer专属的的倾诉与倾听的空间 一个自由、友善、真诚的匿名治愈系社区。",
          img1: require("../assets/img/AboutUs/Husthole.png"),
          img2: require("../assets/img/AboutUs/QQ.png"),
          display: "true",
          

        },
        {
          pic: require("../assets/img/AboutUs/LOGO 1.png"),
          color: "#F1ECF1",
          title: "BetweenUs ",
          slogan: "——每一次问答，我都在走近你 <br/>  No more gap between us ",
          content: "帮助异地情侣互相了解，促进双方感情增温 的趣味问答产品",
          display: "false",
          
        },
      ],
    };
  },
  
});
</script>

<style scoped>
.main{
  position: absolute;
        top: 99px;
        width: 100%;
        background-color: #fff;
}
.head {
  position: absolute;
  z-index: 1;
}
.center {
  width: 1440px;

  margin: 0 auto;
  background: #ffffff;
  position: relative;
  border-radius: 5px;
}

.center .first-content {
  position: absolute;
  width: 643px;
  height: 91px;
  left: 150px;
  top: 313px;

  font-family: Source Han Serif SC;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  letter-spacing: 0.105em;
  text-transform: uppercase;

  color: #000000;
}
.center .first img {
  position: absolute;
  width: 205px;
  height: 205px;
  left: 958px;
  top: 235px;
  border-radius: 50%;
}

.second .content {
  position: relative;
  width: 420px;

  left: 130px;
  top: 0px;

  font-family: Source Han Serif SC;
  font-size: 36px;
  line-height: 12px;
  /* or 33% */

  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #000000;
}

/* .second .content .dialog {
} */
.secondbox{
  padding-top:603px ;
  padding-left:20px ;
}
.second {
  position: relative;
  width: 1400px;
  top: 603px;
  left: 20px;
}
/* .second .box .avater :hover .dialog{
  display: block;
} */
.second .box {
  position: relative;
  width: 1400px;

  left: 20px;
  top: 112px;
}
.second .box .item {
  position: relative;
  width: 1360px;
  height: 350px;
  margin-left: 20px;
  margin-bottom: 24px;
  background-color: #ecf0f1;
}
.second .box .avater {
  position: relative;
  width: 284px;
  height: 284px;
  left: 130px;
  top: 33px;
  border-radius: 24px;
}

.second .box .dialog {
  display: none;
  position: absolute;
  width: 420px;
  height: 212px;
  left: 483px;
  top: 85px;
  background: #ffffff;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  z-index: 1;
}
.second .box .dialog::before{
            
            content:'';
            position: absolute;
            border: 20px solid;
            border-color: transparent #ffffff transparent transparent;
            left: -40px;
            top: 85px;
        }
.second .box .i1 {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 26px;
  left: 32px;
}
.second .box .i2 {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 36px;
  left: 234px;
}
.second .box .up {
  position: absolute;
  width: 62px;
height: 12px;
  left: 74px;
  top: 193px;
  font-family: Source Serif Pro;
  font-size: 18px;
  line-height: 12px;
  /* identical to box height, or 67% */

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #8d8d8d;
}
.second .box .down {
  position: absolute;
  width: 73px;
height: 12px;
  left: 275px;
  top: 193px;
  font-family: Source Serif Pro;
  font-size: 18px;
  line-height: 12px;
  /* identical to box height, or 67% */

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #8d8d8d;
}
.second .box .passage {
  position: absolute;
  width: 561px;
  height: 253px;
  left: 632px;
  top: 50px;

  font-family: Segoe UI;
  font-size: 30px;
  line-height: 120%;
  /* or 40% */

  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #000000;
}
.second .box p {
  margin-bottom: 20px;
  line-height: 120%;
}
.second .box .slogan {
  font-size: 24px;
  line-height: 120%;
}
.second .box .pcontent {
  font-size: 25px;
  margin-top: 50px;
  line-height: 120%;
}
.third {
  position: relative;
  width: 1440px;
  height: 100px;
  margin-top: 800px;
}
.third .code {
  position: absolute;
  top: 135px;
  left: 149px;
}
.third .email {
  position: absolute;
  width: 393px;
  height: 73px;
  left: 142px;
  font-family: Source Han Sans CN;
  font-size: 24px;
  line-height: 36px;
}
.third .email p {
  font-family: Segoe UI;
  font-size: 36px;
  margin-bottom: 20px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.third .code img {
  width: 250px;
  height: 250px;
}
.third .code .two {
  margin-left: 151px;
}
.third p {
  font-family: Segoe UI;

  font-size: 14px;
  line-height: 12px;
  /* identical to box height, or 86% */

  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.third .p1 {
  position: absolute;
  top: 260px;
  left: 37px;
}
.third .p2 {
  position: absolute;
  top: 260px;
  left: 426px;
}
.bottom{
  position:relative;
  top: 2000px;
  z-index: 1;
}

</style>
