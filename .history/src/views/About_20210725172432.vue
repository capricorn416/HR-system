<template>
  <div>
    <div class="main">
      <div class="center">
        <div class="first">
          <div class="first-content">
            团队介绍文案<br/>
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
              >
              <img :src="item.pic"  @mouseenter="show(index)" @mouseleave="hide" />
              </div>

              <div class="dialog" v-if="item.display && seen && index == current" >
                <div>
                  <img :src="item.img1" class="i1" alt="img1" />
                  <p class="up">小程序</p>
                </div>
                <div>
                  <img :src="item.img2" class="i2" alt="img2" />
                  <p class="down">QQ社群</p>
                </div>
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
              邮箱：TEAM@PIVOTSTUDIO.CN
          </div>
          <div class="code">
            <div class="left">
              <img src="../assets/img/AboutUs/downimage 1.png" alt="img1" >
              <p class="p1">QQ扫一扫，加入招新群</p>
            </div>
            <div class="right">
              <img src="../assets/img/AboutUs/downQR.png" class="two"  alt="img2">
              <p class="p2">微信扫码关注我们的公众号</p>  
            </div>  
              
          </div>
        </div>
        
     
      </div>
    </div>
    <div>
      <bottom/>
    </div>
  </div>
</template>

<script>
import bottom from "components/Bottom.vue"
import {getProductDesc} from '@/api/getDes'
export default {
  name: 'About',
  components: {
    bottom
  },
  data() {
    return {
      seen: false,
      current: 0,
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
          display: true,
        },
        {
          pic: require("../assets/img/AboutUs/LOGO 1.png"),
          color: "#F1ECF1",
          title: "BetweenUs ",
          slogan: "——每一次问答，我都在走近你 <br/>  No more gap between us ",
          content: "帮助异地情侣互相了解，促进双方感情增温 的趣味问答产品",
          display: false,
          
        },
      ],
    }
  },
  methods: {
    show(index) {
      this.seen = true;
      this.current = index;
    },
    hide() {
      this.seen = false;
      this.current = null;
    }
  },
  created() {
    getProductDesc().then((res) => {
      console.log(res.data.msg)
      this.datalist = res.data.msg
    }).catch((err) => {
      
    });
  }
}
</script>

<style scoped>
.center {
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  position: relative;
}

.center .first-content {
  position: absolute;
  width: 643px;
  height: 91px;
  left: 150px;
  top: 214px;
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
  top: 136px;
  border-radius: 50%;
}

.second {
  position: relative;
  top: 504px;
}
.second .content {
  position: relative;
  width: 420px;
  left: 150px;
  font-family: Source Han Serif SC;
  font-size: 36px;
  line-height: 12px;
  /* or 33% */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #000000;
}
.second .box {
  width: 100%;
  padding: 20px;
  margin-top: 97px;
}
/* .second .content .dialog {
} */

.second .box .item {
  height: 350px;
  margin-bottom: 24px;
  background-color: #ecf0f1;
}
.second .box .avater {
  float: left;
  width: 284px;
  height: 284px;
  margin-left: 130px;
  margin-top: 33px;
  border-radius: 24px;
}
.second .box .passage {
  float: right;
  width: 561px;
  height: 253px;
  font-family: Segoe UI;
  font-size: 30px;
  line-height: 120%;
  /* or 40% */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #000000;
  margin-top: 44px;
  margin-right: 157px;
}
.third {
  margin-top: 600px;
  margin-bottom: 79px;
}
.third .code {
  margin-top: 62px;
  margin-left: 149px;
  width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.third .email {
  width: 393px;
  height: 73px;
  margin-left: 142px;
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
.third p {
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 12px;
  /* identical to box height, or 86% */
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.code p {
  margin-left: 23px;
}
.second .box .dialog {
  /* display: none; */
  position: absolute;
  z-index: 1000;
  width: 420px;
  height: 212px;
  left: 483px;
  margin-top: 85px;
  background: #ffffff;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
}
.second .box .dialog p {
  margin-left: 45px;
  margin-top: 5px;
  font-family: Source Serif Pro;
  font-size: 18px;
  line-height: 12px;
  /* identical to box height, or 67% */

  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.second .box .dialog::before{
            
            content:'';
            position: absolute;
            border: 20px solid;
            border-color: transparent #ffffff transparent transparent;
            left: -40px;
            top: 85px;
        }

</style>