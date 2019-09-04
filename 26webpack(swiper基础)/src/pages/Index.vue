<template>
  <div>
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide m-banner-item">Slide 1</div>
          <div class="swiper-slide m-banner-item">Slide 2</div>
          <div class="swiper-slide m-banner-item">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="m-message">{{message}}</div>
    <img :src="clothes_44kb" />
    <img :src="clothes_79kb" />
    <div class="m-clothes-44kb"></div>
    <div class="m-clothes-79kb"></div>
    <div>
      <span class="icon iconfont icon-naozhong m-icon"></span>
      <span class="icon iconfont icon-weibiaoti- m-icon"></span>
      <span class="icon iconfont icon-shoudaobaodan m-icon"></span>
    </div>
    <div class="m-count">{{count}}</div>
    <div>
      <button @click="handleSub">减</button>
      <button @click="handleAdd">加</button>
    </div>
  </div>
</template>

<script>
import clothes_44kb from "@/static/images/clothes_44kb.png";
import clothes_79kb from "@/static/images/clothes_79kb.png";
import Swiper from "swiper";
import axios from "axios";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {
      message: "hello vue!12",
      clothes_44kb: clothes_44kb,
      clothes_79kb: clothes_79kb,
      count: 0,
      bannerList: []
    };
  },
  methods: {
    handleAdd() {
      this.count = this.count + 1;
    },
    handleSub() {
      this.count = this.count - 1;
    }
  },
  mounted() {
    axios({
      url: "/api/getCaroselList"
    }).then(res => {
      if (res.data.code === 200) {
        this.bannerList = res.data.data;
      }
    });
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 1000 //1秒切换一次
      },
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style>
.m-count {
  font-size: 36px;
  color: #ff0000;
}
</style>