<template>
  <div class="m-wrap">
    <Header></Header>
    <div class="m-main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
            <img :src="item.image" class="m-banner-img" />
          </div>
        </div>
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
import axios from "axios";
import Swiper from "swiper";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "swiper/dist/css/swiper.css";

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
    console.log("挂载完！");
    axios({
      url: "/api/getCarouselList"
    }).then(res => {
      console.log(res.data);
      if (res.data.code === 200) {
        this.bannerList = res.data.data;
      }
    });
  },
  updated() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true //可选选项，自动滑动
    });
  }
};
</script>

<style>
</style>