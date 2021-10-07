<template>
  <v-app>
    <div class="home">
      <div class="main">
        <div id="join" class="join">
          <button class="join_btn" @click="gotoRegister">
            <v-icon x-large dark class="join_icon">mdi-chevron-down</v-icon>   
          </button>
          <button class="join_font" @click="gotoRegister" >JOIN US</button>
        </div>
      </div>

      <div class="register">
        <v-overlay :value="overlay" absolute>
          <v-card width="250">
            <v-card-text class="text-subtitle-1 text-center">
              抱歉，目前不处于招新期
            </v-card-text>
          </v-card>
        </v-overlay>
        <div class="sign-up">
          <p id="sign" class="sign-up_header">报名信息录入</p>
          <div class="sign-up_form">
            <v-app>
            <v-form ref="form" >
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
                          color="rgb(111,111,111)"
                      ></v-text-field>   
                  </v-list-item>
                  <v-list-item class="list">
                    <v-select
                          label="组别"
                          :items="groups"
                          :rules="groupRules"
                          item-text="name"
                          item-value="index"
                          single-line
                          solo
                          flat
                          background-color="#F3F3F3"
                          dense
                          class="input group"
                          v-model="group"
                          color="rgb(111,111,111)"
                      ></v-select>
                    <!-- <div class="sex-tip">性别</div> -->
                      <v-radio-group
                        v-model="sex"
                        row
                        class="sex list-firstline-item"
                        mandatory
                      >
                        <v-radio
                          label="男"
                          value="2"
                          color="#666666"
                          class="sex-option"
                        ></v-radio>
                        <v-radio
                          label="女"
                          value="1"
                          color="#666666"
                          class="sex-option"
                        ></v-radio>
                      </v-radio-group>          
                  </v-list-item>
                    <v-list-item class="list group_xs">
                    <v-select
                          label="组别"
                          :items="groups"
                          :rules="groupRules"
                          item-text="name"
                          item-value="index"
                          single-line
                          solo
                          flat
                          background-color="#F3F3F3"
                          dense
                          class="input "
                          v-model="group"
                          color="rgb(111,111,111)"
                      ></v-select>
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
                        color="rgb(111,111,111)"
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
                          color="rgb(111,111,111)"
                      ></v-text-field>
                  </v-list-item>
                  <v-list-item class="list">
                      <v-select
                          v-model="grade"
                          label="年级"
                          :items="grades"
                          item-text="name"
                          item-value="index"
                          :rules="gradeRules"
                          single-line
                          solo
                          flat
                          background-color="#F3F3F3"
                          dense
                          class="input"
                          color="rgb(111,111,111)"
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
                          color="rgb(111,111,111)"
                      ></v-text-field>    
                  </v-list-item> 
                  </v-list>
              </div>
              <div class="sign-up_right">
                <v-file-input
                :label="$vuetify.breakpoint.xs ? '简历': '点击此处上传简历'"
                solo
                flat
                background-color="#F3F3F3"
                height="162"
                :rules="resumeRules"
                v-model="resume"
                color="rgb(111,111,111)"
                prepend-icon=''
                class="file-input"
                ></v-file-input>
                <v-file-input
                :label="$vuetify.breakpoint.xs ? '作品集（非必填）': '点击此处上传作品集（非必填）'"
                solo
                flat
                background-color="#F3F3F3"
                height="162"
                v-model="work"
                color="rgb(111,111,111)"
                prepend-icon=''
                class="file-input"
                ></v-file-input>
                <v-btn color="#333333" class="sign-up_submit"
                  :loading="loading"
                  :disabled="loading"
                  @click="validateField"
                  width="90"
                  height="32"
                  >
                  提交
                  <img src="~assets/img/home/Shape.png" alt="" srcset="">
                </v-btn>
              </div>    
            </v-form>
            </v-app>
          </div>
        </div>
      </div>
      
      <bottom/>
    </div>
  </v-app>
</template>

<script>
  import Bottom from '../components/Bottom.vue'
  import {sendForm} from '@/api/sendForm'
  import { getUploadToken } from '@/api/qiniu'
  const qiniu = require('qiniu-js')
  export default {
  components: { Bottom },
    name: 'Home',
    data() {
      return {
        overlay: true,
        loader: null,
        loading: false,
        time: "2021秋季",
        name: '',
        nameRules: [
          v => !!v || '姓名不能为空哦'
        ],
        group: '',
        groups: [ 
          {index: 1, name: '产品', disabled: true},
          {index: 2, name: '运营', disabled: true},
          {index: 3, name: '设计', disabled: true},
          {index: 4, name: '前端', disabled: true},
          {index: 5, name: '后端', disabled: true},
          {index: 6, name: '移动', disabled: true},
          {index: 7, name: '游戏'}
        ],
        groupRules: [
          v => !!v || '组别不能为空哦'
        ],
        phone: '',
        phoneRules: [
          v => !!v || '电话不能为空哦',
          v => /^1[0-9]{10}$/.test(v) || '请输入正确的电话号码 ~'
        ],
        qq: '',
        qqRules: [
          v => !!v || 'QQ不能为空哦'
        ],
        grades: [
          {index: 1, name: '大一'},
          {index: 2, name: '大二'},
          {index: 3, name: '大三'},
          {index: 4, name: '大四'},
          {index: 5, name: '研一'},
          {index: 6, name: '研二'},
          {index: 7, name: '研三'},
          {index: 8, name: '其他'}
        ],
        grade:'',
        gradeRules: [
          v => !!v || '年级不能为空哦'
        ],
        major: '',
        majorRules: [
          v => !!v || '专业不能为空哦'
        ],
        resumeRules: [
          v => !!v || '简历不能为空哦'
        ],
        docmHeight: document.documentElement.clientHeight,
        showHeight: document.documentElement.clientHeight,
        hidShow: true,
        loading: false,
        success: {
          state: true,
          info: '报名信息提交成功 ~'
        },
        error: {
          state: false,
          info: '报名信息提交失败'
        },
        resume: null,
        work: null,
        sex: ''
      }
    },
    methods: {
      gotoRegister() { 
        let distance = document.querySelector('.register').offsetTop + 69;
        window.scrollTo({
          top: distance,
          behavior: 'smooth'
        })
      },
      async validateField() {
        var state = this.$refs.form.validate();
        if(state === false) {
          return false
        } else {
          this.loading = true;
          var formData = new FormData();
          const tp1 = getUploadToken();
          const tp2 = getUploadToken();
          formData.append('name', this.name);
          formData.append('sex', this.sex);
          formData.append('phone_number', this.phone);
          formData.append('qq_number', this.qq);
          formData.append('grade', this.grade);
          formData.append('major', this.major);
          formData.append('group', this.group);
          const token1 =  (await tp1).token;
          const rel = this.resume.name.split('.')
          const rekey = (new Date().getTime().toString())+ this.phone+'/'+this.group+'/'+this.name.split(' ').join('-')+'简历.'+rel[rel.length-1]
          const ob = qiniu.upload(this.resume,rekey,token1)
          await new Promise((re,rj)=>{
            ob.subscribe(null,err=>{
              alert('文件上传失败');
              rj(err)
            },res=>{
              re(res)
            })
          })
          formData.append('resume_key', rekey);
          const token2 =  (await tp2).token;
          if (this.work) {
            const workkey = (new Date().getTime().toString())+ this.phone+'/'+this.group+'/'+'/'+this.name.split(' ').join('-')+'-'+this.work.name.split(' ').join('-')
            const ob2 = qiniu.upload(this.work,workkey,token2)
            await new Promise((re,rj)=>{
              ob2.subscribe(null,err=>{
                alert('文件上传失败');
                rj(err)
              },res=>{
                re(res)
              })
            })
            formData.append('work_key',  workkey); 
          }
          sendForm(formData).then((res) => {
            this.loading = false;
            this.$router.push({path: '/message'})
          }).catch((err) => {
            this.loading = false;
            console.log(err);
            alert('报名信息提交失败，请重试')
          });
        }
      }
    },
    created:()=>{
      const isElementInViewport = (el) => {

        // Special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
      }
      var lastScrollTop = 0;
      var disable = false;
      var disableup = false;
      window.addEventListener('scroll',(e)=>{
        try {
          var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
          if (st > lastScrollTop){
            // downscroll code
            if (!disable&&isElementInViewport(document.getElementById('join'))) {
              disable = true;
              let distance = document.querySelector('.register').offsetTop + 69;
              window.scrollTo({
                top: distance,
                behavior: 'smooth'
              })
              setTimeout(()=>{
                disable = false;
              },1000)
            }
          } else {
            //   // upscroll code
            // if (!disableup&&!isElementInViewport(document.getElementById('join'))) {
            //   disableup = true;
            //   window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth'
            //   })
            //   setTimeout(()=>{
            //     disableup = false;
            //   },1000)
            // }
          }
          lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        } catch (error) {
          
        }

      })
    }
  }
</script>

<style scoped>
::v-deep
div.v-input__slot>div.v-text-field__slot{
  height: 100% !important;
}
::v-deep
.sex.v-input .v-label {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  color: #2C2C2C;
}
::v-deep 
.v-messages__message {
  line-height: 14px !important;
}
::v-deep 
.v-application--wrap {
  min-height: 0;
}
.time, .sign-up_header {
  cursor: default;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.join_font, .list, .sign-up_right {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
  .main {
    position: relative;
    width: 100%;
    height: calc(100vh - 69px);
    background-image: url("../assets/img/home/bg.jpg");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
  }
  .join {
    position: absolute;
    top: 68%;
    left: 14%;
    width: 240px;
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
    width: 47px;
    height: 47px;
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
    background: lightgray;
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
    font: normal 700 36px "Source Han Serif TC";
    outline: none;
    line-height: 64px;
  }
  .register {
    height: 720px;
    background: white;
    position: relative;
  }
  .sign-up {
    width: 80%;
    margin: 0 auto;
    padding-top: 10vh;
  }
  .sign-up_header {
    font: normal 400 24px "Source Han Serif TC";
    color: #8D8D8D;
    margin-left: 5px;
    margin-bottom: 30px;
  }
  .sign-up_form {
    width: 100%;
  }
  .sign-up_left {
    float: left;
    width: 45%;
  }
  .sign-up_right {
    padding-top: 10px;
    float: right;
    width: 45%;
  }
  .list {
    padding-left: 0;
  }

  .group {
    min-width: 110px;
  }
  .group_xs {
    display: none;
  }
  .sex {
    padding-left: 10%;
    min-width: 190px;
  }
  .sex-option {
    margin-top: -20px;
  }
  .sex-tip, .group-tip {
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
    float: right;
    margin-top: 17px;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #F3F3F3;
  }
  .sign-up_submit img {
    margin-left: 15px;
  }
  @media screen and (max-width: 767px) {
    .sign-up_left {
      width: 50%;
    }
    .sex-tip {
      display: none;
    }
    .group_xs {
      display: block;
    }
    .group {
      display: none !important;
    }
    .join {
      left: 5%;
      width: 190px;
    }
    .time {
      left: 5%;
      font-size: 24px;
      line-height: 32px;
    }
    .join_font {
      font-size: 28px;
    }
    .join_btn {
      width: 40px;
      height: 40px;
    }
    .join_icon {
      font-size: 24px !important;
    }
  }
</style>