<template>

  <div> 
     
   
    <div class="main">
    <div class="center">
      <div class="first">
        <div class="first-content">
          
          Pivot
          Studio成立于2020年11月，是⼀个创意驱动、怀抱好奇、充满热情的校园互联网团队，
          我们专注于开发创意丰富、设计简约、体验⼀流的校园产品。
        </div>
        <v-img class="img"
          src="../assets/img/AboutUs/PivotStudio_Logo_Squre_Solid_W-10.png"
        ></v-img>
      </div>

      
      <div class="second">
        <div class="content">我们做了什么？</div>
        <div class="box">
         
          <div
            v-for="(item, index) in datalist"
            :key="index"
            class="item"
            
            
          >
            <div
              class="avater"
               @mouseover="enter(index)"
               @mouseout="leave()"
            >
            
              
              <img :src="item.logo_url" />
            </div>
            <div class="dialog" v-show="isSeen && index === current">
              <img :src="item.img_urls[0]" class="i1" alt="img1" />
              <p class="up">小程序</p>
              <img :src="item.img_urls[1]" class="i2" alt="img2" />
              <p class="down">QQ社群</p>
            </div>

            <div class="passage">
              <p class="title">{{ item.product_title }}</p>
              <!-- <p class="slogan" v-html="item.slogan"></p> -->
              <p class="pcontent">{{ item.product_desc }}</p>
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

         
    </div>
    <div class="bottom">
          <bottom/>
         </div>
    </div>
  </div>
</template>
<script lang="js">
import Vue from "vue";
import {getProductDesc} from '@/api/getDes'
import  Bottom from "../components/Bottom.vue";
export default({
  name: "About",
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
     }
        function push(){
          this.status = !this.status
          this.datalist[0].push(new  ObjStory (1,0));
         this.datalist[1].push(new  ObjStory (1,0));
         console.log(this.datalist.img_urls);}
      },
      
      enter(index)    {
         this.isSeen = true;
         this.current = index;
       },
       leave(){
         this.isSeen = false;
        this.current = null;
       }  
    }
});
</script>

<style scoped>
.item a:hover.box .dialog{
  display: block;
}
.main{
  position: absolute;
        top: 99px;
        width: 100%;
        background-color: #fff;
}
.center {
  width: 95%;
  margin: 0 auto;
  background: #ffffff;
  position: relative;
  border-radius: 5px;
}
 .first{
  height: 205px;
  margin-top: 11%;
  margin-left:12% ;
}
.first-content {
  float: left;
  width: 49%;
  height: 91px;
   margin-top: 78px;
  font-family: "Source Han Serif SC";
  font-size: 18px;
  line-height: 20px;
  /* or 111% */
  letter-spacing: 0.105em;
  text-transform: uppercase;
  color: #000000;
}
 .img {
 float: left;
  width: 16%;
  min-width: 180px;
  margin-left: 12%;
  border-radius: 50%;
}
.second .content {
 
  font-family: Source Han Serif SC;
 margin-left: 9.5%;
  font-family: "Source Han Serif SC";
  font-size: 36px;
  line-height: 12px;
  /* or 33% */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #000000;
}
/* .second .content .dialog {
} */
.second { 
  width: 94%;
  margin: 132px auto 0;
  
}
.second .box {
  width: 100%;
  margin-top: 112px;
}
 .item {
  position: relative;
  width: 100%;
  height: 350px;
  margin-bottom: 24px;
  background-color: #ecf0f1;
}
 .avater {
 float: left;
  width: 284px;
  height: 284px;
  margin-left: 10%;
  margin-top: 33px;
  border-radius: 24px;
}
 .dialog {
  
  position: absolute;
  width: 420px;
  height: 212px;
  left: 30%;
  top: 85px;
  margin-left: 140px;
  background: #ffffff;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  z-index: 1;
}
 .dialog::before{
            
            content:'';
            position: absolute;
            border: 20px solid;
            border-color: transparent #ffffff transparent transparent;
            left: -40px;
            top: 85px;
        }
 .i1 {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 26px;
  left: 32px;
}
 .i2 {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 36px;
  left: 234px;
}
 .up {
  position: absolute;
  width: 62px;
height: 12px;
  left: 74px;
  top: 193px;
  font-family: "Source Serif Pro";
  font-size: 18px;
  line-height: 12px;
  /* identical to box height, or 67% */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8d8d8d;
}
 .down {
  position: absolute;
  width: 73px;
height: 12px;
  left: 275px;
  top: 193px;
  font-family:" Source Serif Pro";
  font-size: 18px;
  line-height: 12px;
  /* identical to box height, or 67% */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8d8d8d;
}
 .passage {
  float: left;
  width: 42%;
  
  margin-left: 16%;
  margin-top: 50px;
  font-family: Segoe UI;
  font-size: 30px;
  line-height: 120%;
  /* or 40% */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #000000;
}
 .box p {
  margin-bottom: 20px;
  line-height: 120%;
}
 .slogan {
  font-size: 24px;
  line-height: 120%;
}
.pcontent {
  font-size: 25px;
  margin-top: 50px;
  line-height: 120%;
}
.third {
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 100px;
}
 .code {
  position: absolute;
  top: 135px;
  left: 10%;
}
 .email {
  position: absolute;
  width: 393px;
  height: 73px;
  left: 10%;
  font-family: Source Han Sans CN;
  font-size: 24px;
  line-height: 36px;
}
 .email  p {
  font-family: Segoe UI;
  font-size: 36px;
  margin-bottom: 20px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
 .code img {
  width: 250px;
  height: 250px;
}
 .two {
  margin-left: 149px;
}
.code p {
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 12px;
  /* identical to box height, or 86% */
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
 .p1 {
  position: absolute;
  top: 260px;
  left: 37px;
}
.p2 {
  position: absolute;
  top: 260px;
  left: 426px;
}
.bottom{
  position:relative;
  top: 400px;
  z-index: 1;
}
@media screen and (max-width: 1100px) {
    .box .passage {
      margin-left:5.2% !important;
    }
  .slogan{
     display: none;
  }
}  
@media screen and (max-width: 772px) {
  .center .first{height: 140px;}
  .center .first .first-content{
    width: 49%;
    margin-top: 30px;
    font-size: 16px;}
  .first .img{
    width: 32%;
    max-width: 155px;
    min-width: 0 ;
    margin-left:12% ;
  }
  .center .second .content{
     margin-left: 9.5%;
     font-size: 30px;
  }
  .center .box{
    margin-top: 58px;
  }
  .box .item{
    height: 290px;
  }
  .box .avater{
    width: 200px;
    height: 200px;
    margin-left: 7%;
    margin-top: 33px;
  }
  .avater img{
    width: 200px;
  }
  .box .dialog{
     width: 250px;
    height: 125px;
    left: 22%;
    top: 71px;
    margin-left: 140px;
  }
  .box .dialog::before{
    border: 17px solid;
    left: -32px;
    top: 47px;
    border-color: transparent #ffffff transparent transparent;
  }
  .box .i1{
    width: 98px;
    height: 98px;
    top: 8px;
    left: 14px;
  }
  .box .up{
      left: 38px;
    top: 107px;
    font-size: 14px;
  }
  .box .i2{
    width: 95px;
    height: 95px;
    top: 14px;
    left: 137px;
  }
  .box .down{
      left: 154px;
    top: 106px;
    font-size: 14px;
  }
  .item .passage{
    margin-top: 30px;
    font-size: 26px;
  }
  .item .slogan{
    font-size: 16px;
    display: block;
  }
  .item .pcontent{
    font-size: 18px;
    margin-top: 27px;
  }
  .third .email p{
    font-size: 30px;
  }
  .third .code img{
    width: 188px;
    height: 188px;
  }
  .third .code .p1{
    top: 194px;
    left: 8px;
  }
  .third .code .p1{
    top: 194px;
    left: 8px;
  }
  .third .code .two{
    margin-left: 66px;
  }
  .third .code .p2{
   top: 194px;
    left: 250px;
    width: 220px;
}
  
}
</style>