<template>
  <div>
    <head-bar class="head"></head-bar>
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
            :style="{backgroundcolor:item.color}"
          >
            <div class="avater">
              <img :src="item.pic" />
            </div>
            <div class="dialog"></div>
            <div class="passage">
              <p class="title">{{ item.title}} </p>
              <p class="slogan" v-html="item.slogan"> </p>
              <p class="pcontent">{{item.content}}</p>
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
            <img src="../assets/img/AboutUs/downimage 1.png" >
             <p class="p1">QQ扫一扫，加入招新群</p>
            <img src="../assets/img/AboutUs/downQR.png" class="two">
            <p class="p2">微信扫码关注我们的公众号</p>
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
export default defineComponent({
  name: 'AboutUs',

  components: {
    HeadBar
  },

 data() {
      return {
      datalist: [
      {
        pic: "../assets/img/AboutUs/方形Logo 1.png",
        color: "#ECF0F1",
        title: "1037树洞",
        slogan:"——有时治愈，时常帮助，总是倾听 ",
        content:
          "HUSTer专属的的倾诉与倾听的空间 一个自由、友善、真诚的匿名治愈系社区。",
      },
      {
        pic: "../assets/img/AboutUs/LOGO 1.png",
        color: "#F1ECF1",
        title: "BetweenUs ",
        slogan:"——每一次问答，我都在走近你 <br/>  No more gap between us ",
        content:
          "帮助异地情侣互相了解，促进双方感情增温 的趣味问答产品",
      },
    ],
        
      }
    },
  data: () => ({
    datalist: [
      {
        pic: "../assets/img/AboutUs/方形Logo 1.png",
        color: "#ECF0F1",
        title: "1037树洞",
        slogan:"——有时治愈，时常帮助，总是倾听 ",
        content:
          "HUSTer专属的的倾诉与倾听的空间 一个自由、友善、真诚的匿名治愈系社区。",
      },
      {
        pic: "../assets/img/AboutUs/LOGO 1.png",
        color: "#F1ECF1",
        title: "BetweenUs ",
        slogan:"——每一次问答，我都在走近你 <br/>  No more gap between us ",
        content:
          "帮助异地情侣互相了解，促进双方感情增温 的趣味问答产品",
      },
    ],
  }),
});
</script>

<style scoped>
.head{
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
.second{
  position: relative;
  width: 1400px;
  top:603px;
  left:20px ;

}
.second .box {
  position: relative;
  width: 1400px;
  
  left: 20px;
  top: 112px;
  background-color: black;
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
  position: absolute;
  width: 284px;
  height: 284px;
  left: 130px;
  top: 33px;
  border-radius: 24px;
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
.second .box p{
  margin-bottom: 20px;
  line-height: 120%;
}
.second .box .slogan{
  font-size:24px ;
  line-height: 120%;
}
.second .box .pcontent{
  font-size:25px ;
  margin-top:50px ;
  line-height: 120%;
}
.third{
  
  position: relative;
  width: 1440px;
  height: 100px;
  margin-top: 10px;
 
}
.third .code{
  position: absolute;
  top: 135px;
  left: 149px;
}
.third .email{
  position: absolute;
  width: 393px;
  height: 73px;
  left:142px ;
  font-family: Source Han Sans CN;
  font-size: 24px;
 line-height: 36px; 
}
.third .email p{
  font-family: Segoe UI;
  font-size: 36px;
  margin-bottom:10px ;
letter-spacing: 0.2em;
text-transform: uppercase;
}
.third .code img{
  width: 250px;
height: 250px;
}
.third .code .two{
  margin-left: 151px;
}
.third p{
font-family: Segoe UI;

font-size: 14px;
line-height: 12px;
/* identical to box height, or 86% */

letter-spacing: 0.2em;
text-transform: uppercase;
}
.third .p1{
  position: absolute;
  top: 260px;
  left: 37px;
  
}
.third .p2{
 position: absolute;
  top: 260px;
  left: 426px;
}
</style>
