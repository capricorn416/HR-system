<template>
  <div class="message">
    <div class="mask">
      <div class="dialog">
        <div class="tip">
          <v-icon large>mdi-check-circle-outline</v-icon>
          您已成功提交报名信息！
        </div>
        <v-btn class="back-btn" width="93" dark 
        height="32" depressed color="#2C2C2C" @click="backHome">返回首页</v-btn>
      </div>
    </div>
    <Bottom/>
  </div>
</template>

<script>
import Bottom from '../components/Bottom.vue'
export default {
  name: 'message',
  components: {
    Bottom
  },
  methods: {
    backHome() {
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style scoped>
.message {
  position: relative;
}
.message .mask {
  position: relative;
  height: calc(100vh - 69px);
  overflow: hidden;
  background: #D5D5D5;
}
.dialog {
  height: 289px;
  width: 56vw;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog .tip {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #1C1C1C;
}
.v-icon {
  margin-right: 12px;
}
.back-btn {
  position: absolute;
  right: 10%;
  bottom: 48px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
</style>