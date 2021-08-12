<template>
  <v-app>
    <div class="home">
      <div class="main">
        <p class="time">Pivot Studio<br/>{{time}}招新</p>
        <div class="join">
          <button class="join_btn" @click="gotoRegister">
            <v-icon x-large dark class="join_icon">mdi-chevron-down</v-icon>   
          </button>
          <button class="join_font" @click="gotoRegister" >JOIN US</button>
        </div>
      </div>

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
                  <!-- <v-btn class="sign-up_submit" type="button" @click="validateField">
                    提交
                </v-btn> -->
                <v-btn color="#333333" class="sign-up_submit"
                  :loading="loading"
                  :disabled="loading"
                  @click="validateField"
                  >
                  提交
                </v-btn>
              </div>
              <div class="sign-up_right">
                <v-file-input
                label="点击此处上传简历"
                solo
                flat
                background-color="#F3F3F3"
                height="162"
                :rules="resumeRules"
                v-model="resume"
                ></v-file-input>
                <v-file-input
                label="点击此处上传作品集（非必填）"
                solo
                flat
                background-color="#F3F3F3"
                height="162"
                v-model="work"
                ></v-file-input>
              </div>    
            </v-form>
            <!-- <v-snackbar
              :value="success.state" centered flat color="success" outlined min-width="50%" height="100"
            >
            {{ success.info }}
            </v-snackbar>
            <v-snackbar
              :value="error.state" centered flat color="success" outlined min-width="50%" height="100"
            >
            {{ error.info }}
            </v-snackbar> -->
            </v-app>
          </div>
        </div>
      </div>

      <bottom/>
    </div>
  </v-app>
</template>

<script>
  import Bottom from '../components/Bottom.vue';
  import {sendForm} from '@/api/sendForm'
  export default {
  components: { Bottom },
    name: 'Home',
    data() {
      return {
        loader: null,
        loading: false,
        time: "2021秋季",
        name: '',
        nameRules: [
          v => !!v || '姓名不能为空哦'
        ],
        group: '',
        groups: [ 
          {index: 1, name: '产品'},
          {index: 2, name: '运营'},
          {index: 3, name: '设计'},
          {index: 4, name: '前端'},
          {index: 5, name: '后端'},
          {index: 6, name: '移动'}
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
        let distance = document.querySelector('.register').offsetTop + 99;
        window.scrollTo({
          top: distance,
          behavior: 'smooth'
        })
      },
      validateField() {
        var state = this.$refs.form.validate();
        var formData = new FormData();
        
        formData.append('name', this.name);
        formData.append('sex', this.sex);
        formData.append('phone_number', this.phone);
        formData.append('qq_number', this.qq);
        formData.append('grade', this.grade);
        formData.append('major', this.major);
        formData.append('group', this.group);
        formData.append('resume_file', this.resume);
        formData.append('work_file', this.work);
        if(state === true) {
          this.loading = true;
          sendForm(formData).then((res) => {
            this.loading = false;
            alert('报名信息提交成功 ~')
          }).catch((err) => {
            this.loading = false;
            console.log(err);
            alert('报名信息提交失败，请重试')
          });
        }else {
          return
        }
        return false;
      }
    },
  }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100%;
    height: calc(100vh - 99px);
    background-color: black;
    background-image: url("../assets/img/home/poster.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
  }
  .time {
    position: absolute;
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
  .register {
    height: 700px;
    background: white;
  }
  .sign-up {
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
  }
  .sign-up_header {
    font: normal 400 48px "Source Han Serif TC";
    color: #8D8D8D;
    margin-left: 5px;
    margin-bottom: 10px;
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
    min-width: 180px;
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
    margin-top: 2%;
    font: normal 700 40px "Source Han Serif TC";
    color: #F3F3F3;
    padding: 40px !important;
    width: 222px;
  }

  @media screen and (max-width: 767px) {
    .sign-up_header {
      font-size: 32px;
      margin: 0;
    }
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
    .sign-up_submit {
      font-size: 24px;
      padding: 25px !important;
      width: 110px;
    }
  }  
</style>