<template>
  <div class="download">
    <div class="mask">
      <div class="dialog">
        <div class="tip">
          <v-row>
            <v-col style="font-size: 20px">
              <img
                src="~assets/img/AboutUs/方形Logo 1.png"
                width="35"
                style="margin-right:10px"
              /><strong>1037树洞</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-icon @click="gotoH5">mdi-application-outline</v-icon>
              <a href="https://husthole.com">H5网页版</a>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-icon @click="gotoDownloadAndroid">mdi-download</v-icon>
              <a
                href="https://husthole-img.oss-cn-beijing.aliyuncs.com/husthole/download/Husthole.apk"
                >Android下载</a
              >
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-icon @click="gotoDownloadiOS">mdi-download</v-icon>
              <a
                href="https://apps.apple.com/cn/app/1037%E5%8F%B7%E6%A0%91%E6%B4%9E/id1568928394"
                >iOS下载</a
              >
            </v-col>
          </v-row>
        </div>
        <v-btn
          class="back-btn"
          width="93"
          dark
          height="32"
          depressed
          color="#2C2C2C"
          @click="backHome"
          >返回首页</v-btn
        >
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
import Bottom from "../components/Bottom.vue";
export default {
  name: "download",
  components: {
    Bottom,
  },
  methods: {
    backHome() {
      this.$router.push({ path: "/" });
    },
    gotoH5() {
      window.open("https://husthole.com");
    },
    gotoDownloadAndroid() {
      window.open(
        "https://husthole-img.oss-cn-beijing.aliyuncs.com/husthole/download/Husthole.apk?versionId=CAEQIxiBgIDeloSGhxgiIDc1MzI0ZjZkMzViMDRlNDQ5OGJjMTQ1MTZkZDllOWZk"
      );
    },
    gotoDownloadiOS() {
      window.open(
        "https://apps.apple.com/cn/app/1037%E5%8F%B7%E6%A0%91%E6%B4%9E/id1568928394"
      );
    },
  },
};
</script>

<style scoped>
.download {
  position: relative;
}
.download .mask {
  position: relative;
  height: calc(100vh - 69px);
  overflow: hidden;
  background: #d5d5d5;
}
.dialog {
  height: 380px;
  width: 56vw;
  background: #ffffff;
  border-radius: 16px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog .tip {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #1c1c1c;
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
