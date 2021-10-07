<template>
  <div class="download">
    <div class="mask">
      <div class="dialog">
        <div class="tip">
          <v-icon @click="gotoDownload">mdi-download</v-icon>
          <a href="https://pshrpub.nickxiao.icu/1037%E6%A0%91%E6%B4%9E.apk">1037树洞Android下载</a>
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
  name: 'download',
  components: {
    Bottom
  },
  methods: {
    backHome() {
      this.$router.push({ path: '/' });
    },
    gotoDownload() {
      window.open('https://pshrpub.nickxiao.icu/1037%E6%A0%91%E6%B4%9E.apk')
    }
  }
}
</script>

<style scoped>
.download {
  position: relative;
}
.download .mask {
  position: relative;
  height: calc(100vh - 69px);
  overflow: hidden;
  background: #D5D5D5;
}
.dialog {
  height: 289px;
  width: 56vw;
  background: #FFFFFF;
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