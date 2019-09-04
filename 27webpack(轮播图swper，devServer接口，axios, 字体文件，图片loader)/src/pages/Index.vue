<template>
  <div class="m-wrap">
    <Header></Header>
    <div class="m-main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide m-banner-item" v-for="item in bannerList" :key="item.id">
            <img :src="item.image" class="m-banner-img" />
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="m-category">
        <span class="icon iconfont icon-naozhong m-icon"></span>
        <span class="icon iconfont icon-weibiaoti- m-icon"></span>
        <span class="icon iconfont icon-shoudaobaodan m-icon"></span>
        <span class="icon iconfont icon-naozhong m-icon"></span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "swiper/dist/css/swiper.min.css";

let mySwiper;
export default {
  data() {
    return {
      bannerList: []
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    axios({
      url: "/api/getCaroselList"
    }).then(res => {
      if (res.data.code === 200) {
        this.bannerList = res.data.data;
      }
    });
  },
  updated() {
    if (mySwiper) {
      mySwiper.destroy();
    }
    mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 1000
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
</style>