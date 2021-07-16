<template>
    <div>
        <footer>
            <v-img
            class="logo"
            contain
            src="~assets/img/home/logo-white.png"
            width="139"
            height="46"
            />
            <p class="message">© 2021 PIVOT STUDIO提供</p>
            <div class="contact">
                <p>联系我们</p>
                <p>邮箱：team@pivotstudio.cn</p>
                <p>加入招新群</p>
                <p>QQ群：435230136</p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'Bottom'
}
</script>
<style scoped>
    footer {
        /* position: fixed;
        bottom: 0; */
        height: 23%;
        width: 100%;
        background-color: #2C2C2C;
    }
    .logo {
        position: absolute;
        left: 89px;
        top: 20%;
    }
    .message {
        position: absolute;
        left: 101px;
        bottom: 10%;
        color: rgba(200, 200, 200, 0.5);
        font: normal 400 18px "Source Han Serif SC";
        letter-spacing: 0.2em;
    }
    .contact {
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