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
          <v-app>
          <v-form ref="form">
            <div class="sign-up_left">
              <v-list>
                
                <v-list-item class="list list-firstline">
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="姓名"
                        placeholder="姓名"
                        single-line
                        solo
                        flat
                        background-color="#F3F3F3"
                        dense
                        class="input list-firstline-item"
                        clearable
                    ></v-text-field>   
                </v-list-item>
                <v-list-item class="list">
                  <div class="sex-tip">性别</div>
                    <v-radio-group
                      v-model="row"
                      row
                      class="sex list-firstline-item"
                      mandatory
                    >
                      <v-radio
                        label="男"
                        value="radio-1"
                        color="#666666"
                        class="sex-option"
                      ></v-radio>
                      <v-radio
                        label="女"
                        value="radio-2"
                        color="#666666"
                        class="sex-option"
                      ></v-radio>
                    </v-radio-group>             
                </v-list-item>
                <v-list-item class="list">
                    <v-text-field
                      v-model="phone"
                      :rules="phoneRules"
                      label="电话"
                      placeholder="电话"
                      single-line
                      solo
                      flat
                      background-color="#F3F3F3"
                      dense
                      class="input"
                      clearable
                    ></v-text-field>
                </v-list-item>
                <v-list-item class="list">
                    <v-text-field
                        v-model="qq"
                        :rules="qqRules"
                        label="QQ"
                        placeholder="QQ"
                        single-line
                        solo
                        flat
                        background-color="#F3F3F3"
                        dense
                        class="input"
                        clearable
                    ></v-text-field>
                </v-list-item>
                <v-list-item class="list">
                    <v-select
                        label="年级"
                        :items="grades"
                        single-line
                        solo
                        flat
                        background-color="#F3F3F3"
                        dense
                        class="input"
                    ></v-select>
                </v-list-item>
                <v-list-item class="list"> 
                    <v-text-field
                        v-model="major"
                        :rules="majorRules"
                        label="专业"
                        placeholder="专业"
                        single-line
                        solo
                        flat
                        background-color="#F3F3F3"
                        dense
                        class="input"
                        clearable
                    ></v-text-field>    
                </v-list-item> 
                </v-list>
                <button class="sign-up_submit" type="button" @click="validateField">
                  提交
              </button>
            </div>
            <div class="sign-up_right">
              <v-file-input
              placeholder="点击此处上传简历"
              solo
              flat
              background-color="#F3F3F3"
              height="166"
              :rules="resumeRules"
              ></v-file-input>
              <v-file-input
              placeholder="点击此处上传作品集（非必填）"
              solo
              flat
              background-color="#F3F3F3"
              height="166"
              ></v-file-input>
            </div>    
          </v-form>
          </v-app>
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
        time: "2021秋季",
        name: '',
        nameRules: [
          v => !!v || '姓名不能为空哦'
        ],
        phone: '',
        phoneRules: [
          v => !!v || '电话不能为空哦',
          v => /1[0-9]{10}/.test(v) || '请输入正确的电话号码 ~'
        ],
        qq: '',
        qqRules: [
          v => !!v || 'QQ不能为空哦'
        ],
        grades: [
          '大一','大二','大三','大四','研一','研二','研三'
        ],
        gradeRules: [
          v => !!v || '年级不能为空哦'
        ],
        major: '',
        majorRules: [
          v => !!v || '专业不能为空哦'
        ],
        resumeRules: [
          v => !!v || '简历不能为空哦'
        ]
      }
    },
    methods: {
      gotoRegister() { 
        let distance = document.querySelector('.register').offsetTop;
        window.scrollTo({
          top: distance,
          behavior: 'smooth'
        })
      },
      validateField() {
        var state = this.$refs.form.validate();
        console.log(state);
        return false;
      }
      // getTime() {
      //   let date = new Date();
      //   let year = date.getFullYear();
      //   let month = date.getMonth();
      //   console.log(year, month);
      //   if(month<=5) {
      //     // 1到6月
      //     this.time = year + '春季';
      //   }else{
      //     // 7到12月
      //     this.time = year + '秋季'
      //   }
      // }
    },
    // created() {
    //   this.getTime();
    // }
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
    left: 14%;
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
    left: 14%;
    width: 370px;
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
    margin: 2% auto;
  }
  .sign-up_header,
  .sign-up_header_xs {
    font: normal 400 48px "Source Han Serif TC";
    color: #8D8D8D;
    margin-left: 5px;
    margin-bottom: 10px;
  }
  
  .sign-up_header_xs {
    font-size: 40px;
    display: none;
  }

  .sign-up_form {
    width: 100%;
  }

  .sign-up_left {
    float: left;
    width: 40%;
  }

  .sign-up_right {
    float: right;
    width: 50%;
  }
  .list {
    padding-left: 0;
    margin-left: -15px;
  }
  .sex {
    min-width: 150px;
  }
  .sex-option {
    margin-top: -20px;
  }
  .sex-tip {
    background-color: #f3f3f3;
    min-width: 75px;
    height: 36px;
    border-radius: 3px;
    text-indent: 12px;
    line-height: 36px;
    margin-top: 0px;
    margin-bottom: 25px;
    margin-right: 30px;
    color: #7a7a6a;
  }
  .sign-up_submit {
    margin-top: 10px;
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
    top: 55px;    
  }
  .footer_message {
    position: absolute;
    left: 101px;
    bottom: 27px;
    color: rgba(200, 200, 200, 0.5);
    font: normal 400 18px "Source Han Serif SC";
    letter-spacing: 0.2em;
  }
  .footer_contact {
    position: absolute;
    left: 61%;
    top: 65px;
    width: 291px;
    height: 96px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #DADADA;
    font: normal 700 14px "Source Han Serif SC";
  }
  @media screen and (max-width: 768px) {
    .sign-up_header {
      font-size: 40px;
    }
    .sign-up_left {
      width: 50%;
    }
    .sex-tip {
      display: none;
    }
    .join {
      left: 5%;
      width: 230px;
    }
    .join_btn {
      width: 40px;
      height: 40px;
    }
    .join_font {
      font-size: 40px;
    }
    .time {
      left: 4%;
      top: 40%;
      font-size: 30px;
    }
    .footer_logo,
    .footer_message {
      display: none;
    }
    .footer_contact {
      left: 10%;
    }
  }
</style>
