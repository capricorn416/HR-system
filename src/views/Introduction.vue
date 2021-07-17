<template>
    <div>
        <head-bar/>
        <div class="main2">
            <div class="section">
                <v-list v-for="(item, index) in message" :key="index">
                    <v-list-item>
                        <v-card
                        flat
                        color="#FBFBFB"
                        height="435"
                        width="100%"
                        >
                            {{item.info}}
                        </v-card>
                    </v-list-item>
                </v-list>
            </div>
        </div>
    </div>
    
    
</template>

<style>
    .main2 {
        position: absolute;
        top: 99px;
        width: 100%;
        background-color: violet;
    }
    .section {
        position: relative;
        width: 84%;
        margin: 0 auto;
        background-color: yellow;
    }
</style>

<script>
import HeadBar from '../components/HeadBar.vue'
export default {
    name: 'Introduction',
    components: { 
        HeadBar 
    },
    data() {
        return {
            message: [{
                name: '产品组',
                info: '1111111111'
            },
            {
                name: '设计组',
                info: '2222222222'
            },
            {
                name: '技术组',
                info: '3333333333'
            }]
        }
    }
}
</script>