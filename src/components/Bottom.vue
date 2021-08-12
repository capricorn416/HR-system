<template>
    <div>
        <div class="footer">
            <v-img
            class="footer_logo"
            contain
            src="~assets/img/home/logo-white.png"
            width="139"
            height="46"
            />
            <p class="footer_message">© 2021 PIVOT STUDIO提供 <br>
              <a href="https://beian.miit.gov.cn/" class="beian">蜀ICP备2020029188号-1</a>
            </p>
            <div class="footer_contact">
              <p>联系我们</p>
              <p>邮箱：team@pivotstudio.cn</p>
              <p>加入招新群</p>
              <p>QQ群：435230136</p>
            </div>
        </div>
    </div>
</template>
<script scoped>
export default {
    name: 'Bottom'
}
</script>
<style scoped>
  .footer {
    height: 250px;
    background-color: #2c2c2c;
    position: relative;
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
    line-height: 30px;
    cursor: default;
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
  .beian {
    text-decoration: none;
    color: rgba(200, 200, 200, 0.5);
  }
  @media screen and (max-width: 768px) {
    .footer_logo,
    .footer_message {
      display: none;
    }
  .footer_contact {
    left: 12%;
  }
}  
</style>