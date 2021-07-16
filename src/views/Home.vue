<template>
  <div>
    <!-- 招新首页 -->
    <div class="home">
      <head-bar></head-bar>
      <div class="main">
        <p class="time">Pivot Studio<br/>{{time}}招新</p>
        <div class="join">
          <button class="join_btn" @click="gotoRegister">
            <v-icon x-large dark class="join_icon">mdi-chevron-down</v-icon>   
          </button>
          <button class="join_font" @click="gotoRegister" >JOIN US</button>
        </div>
      </div>
    </div>

    <!-- 报名页面 -->
    <div class="register">
      <div class="sign-up">
        <p class="sign-up_header">报名信息录入</p>
        <div class="sign-up_form">
          <v-form>
            <div class="sign-up_left">
              <v-list>
                <v-list-item class="list">
                    <v-text-field
                        label="姓名"
                        placeholder="姓名"
                        single-line
                        filled
                        dense
                        class="input"
                    ></v-text-field>
                    <v-radio-group
                      v-model="row"
                      row
                      class="sex"
                      mandatory
                      
                    >
                      <v-radio
                        label="男"
                        value="radio-1"
                      ></v-radio>
                      <v-radio
                        label="女"
                        value="radio-2"
                      ></v-radio>
                    </v-radio-group>                
                </v-list-item>
                <v-list-item class="list">
                    <v-text-field
                        label="电话"
                        placeholder="电话"
                        single-line
                        filled
                        dense
                        class="input"
                    ></v-text-field>
                </v-list-item>
                <v-list-item class="list">
                    <v-text-field
                        label="QQ"
                        placeholder="QQ"
                        single-line
                        filled
                        dense
                        class="input"
                    ></v-text-field>
                </v-list-item>
                <v-list-item class="list">
                    <v-text-field
                        label="年级"
                        placeholder="年级"
                        single-line
                        filled
                        dense
                        class="input"
                    ></v-text-field>
                </v-list-item>
                <v-list-item class="list"> 
                    <v-text-field
                        label="专业"
                        placeholder="专业"
                        single-line
                        filled
                        dense
                        class="input"
                    ></v-text-field>    
                </v-list-item> 
                </v-list>
                <button class="sign-up_submit">
                  提交
              </button>
            </div>
            <div class="sign-up_right">
              <v-file-input
              placeholder="点击此处上传简历"
              ></v-file-input>
              <v-file-input
              placeholder="点击此处上传作品集（非必填）"
              ></v-file-input>
            </div>    
          </v-form>
        </div>

      </div>
    </div>
    <!-- 页尾 -->
    <div class="footer">
        <v-img
          class="footer_logo"
          contain
          src="~assets/img/home/logo-white.png"
          width="139"
          height="46"
        />
        <p class="footer_message">© 2021 PIVOT STUDIO提供</p>
        <div class="footer_contact">
          <p>联系我们</p>
          <p>邮箱：team@pivotstudio.cn</p>
          <p>加入招新群</p>
          <p>QQ群：435230136</p>
        </div>
    </div>
  </div>

</template>

<script>
  import HeadBar from 'components/HeadBar.vue'

  export default {
    name: 'Home',

    components: {
      HeadBar
    },
    data() {
      return {
        time: "2021秋季"
      }
    },
    methods: {
      gotoRegister() { 
        let distance = document.querySelector('.register').offsetTop;
        window.scrollTo({
          top: distance,
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style>
  .main {
    position: absolute;
    top: 99px;
    bottom: 0px;
    width: 100%;
    background-image: url("../assets/img/home/poster.png");
    background-repeat: no-repeat;
    /* background-size: 100% 100%; */
    background-size: auto 100%;
    background-position: center;
    background-color: black;
  }
  .time {
    position: absolute;
    /* top: 39%; */
    /* left: 15%; */
    top: 50%;
    margin-top: -10%;
    right: 50%;
    margin-right: 75px;
    width: 400px;
    color: white;
    font: normal 400 48px "Source Han Serif TC";
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .join {
    position: absolute;
    /* top: 72%;
    left: 20%; */
    top: 68%;
    right: 50%;
    margin-right: 130px;
    width: 360px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .join_btn {
    position: relative;
    top: -5px;
    transition: 1s;
    z-index: 1000;
    width: 65px;
    height: 65px;
    background-color: linear-gradient(45deg, transparent, transparent 40%, aqua);
    outline: none;
    border-radius: 50%;
    animation: move 2.5s ease-in-out infinite both;
  }
  
  .join_icon {
    z-index: 1000;
  }
  @keyframes move{
    0%{
      transform: translateY(10px);
    }
    50%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(10px);
    }
  }
  .join_btn::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: black;
    z-index: 900;
    transition: 2s;
  }
  .join_btn::after {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 50%, aqua);
    z-index: 1;
    animation: light 2s linear infinite;
  }
  .join_btn:hover::before {
    background: lightgray;;
    box-shadow: 0 0 20px aqua; 
  }
  .join_btn:hover::after {
    animation: none;
  }
  @keyframes light{
    0%{
      transform: rotate(0);
      filter: hue-rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
  .join_font {
    color: white;
    font: normal 700 64px "Source Han Serif TC";
    outline: none;
    line-height: 64px;
  }

  .click {
    position: absolute;

  }

  .register {
    position: absolute;
    width: 100%;
    top: 100%;
    height: 100%;
  }

  .sign-up {
    width: 80%;
    height: 80%;
    margin: 5% auto;
  }
  .sign-up_header {
    font: normal 400 48px "Source Han Serif TC";
    color: #8D8D8D;
    margin-left: 5px;
    margin-bottom: 10px;
  }  
  .sign-up_form {
    width: 100%;
    height: 60%;
  }

  .sign-up_left {
    float: left;
    width: 50%;
  }

  .sign-up_right {
    float: right;
    width: 50%;
  }
  .list {
    padding-left: 0;
    margin-left: -15px;
  }
  .sign-up_submit {
    margin-top: 15px;
    height: 71px;
    width: 222px;
    background-color: #333333;
    font: normal 700 40px "Source Han Serif TC";
    color: #F3F3F3;
    outline: none;
  }
  .footer {
    position: absolute;
    top: 200%;
    height: 250px;
    width: 100%;
    background-color: #2C2C2C;
  }
  .footer_logo {
    position: absolute;
    left: 89px;
    top: 20%;    
  }
  .footer_message {
    position: absolute;
    left: 101px;
    bottom: 10%;
    color: rgba(200, 200, 200, 0.5);
    font: normal 400 18px "Source Han Serif SC";
    letter-spacing: 0.2em;
  }
  .footer_contact {
    position: absolute;
    left: 821px;
    top: 23%;
    width: 291px;
    height: 96px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #DADADA;
    font: normal 700 14px "Source Han Serif SC";
  }
  
</style>
