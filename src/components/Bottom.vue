<template>
    <div>
        <div class="footer">
            <v-img
            class="footer_logo"
            contain
            src="~assets/img/home/logo-white.png"
            width="94"
            
            />
            <p class="footer_message">© 2021 PIVOT STUDIO提供 |
              <a href="https://beian.miit.gov.cn/" class="beian">蜀ICP备2020029188号-1</a>
            </p>
            <div class="footer_contact">
              <p>联系我们</p>
              <p><img src="~assets/img/bottom/letter.png" alt="" srcset=""> Email: team@pivotstudio.cn</p>
              <p><img src="~assets/img/bottom/position.png" alt=""> Address: Wuhan, Hubei</p>
              <p><img src="~assets/img/bottom/qq.png" alt="" srcset=""> QQ group: 435230136</p>
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
    height: 130px;
    background-color: #2c2c2c;
    position: relative;
  }
  .footer_logo {
    position: absolute;
    left: 33px;
    top: 34px;    
  }
  .footer_message {
    position: absolute;
    left: 33px;
    top: 90px;
    color: #fff;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    letter-spacing: 0.2em;
    cursor: default;
  }
  .footer_contact {
    position: absolute;
    right: 40px;
    top: 28px;
    width: 291px;
    text-align: right;
  }
  p {
    margin: 0;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #fff;
  }
  .beian {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    .footer_logo,
    .footer_message {
      display: none;
    }
  .footer_contact {
    left: 12%;
    text-align: left;
  }
  p {
    font-weight: normal;
  }
}  
</style>