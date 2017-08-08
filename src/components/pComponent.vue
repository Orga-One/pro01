<template>
    <div>
        <img src="static/img/logo.png" @mouseover="clickImg($event)">
        <!-- 放大图片 -->
        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
        <h1>HI Jason </h1>
    </div>

</template>

<script>
import BigImg from '@/components/BigImg.vue'
// import logoSrc from '@/assets/images/select_bg.png'
    export default {
        data() {
            return {
                showImg:false,
                imgSrc: ''
                // logoSrc:'../../assets/images/select_bg.png'
            }
        },
        components: {
            'big-img':BigImg
        },
        methods: {
            clickImg(e) {
                this.showImg = true;
                // 获取当前图片地址
                this.imgSrc = e.currentTarget.src;
            },
            viewImg(){
                this.showImg = false;
            }
        }
    }
</script>
