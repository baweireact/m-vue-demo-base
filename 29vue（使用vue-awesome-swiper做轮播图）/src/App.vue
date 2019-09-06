<template>
  <div id="app">
    <div>
      <swiper v-if="bannerList.length > 0" :options="swiperOption">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.image" class="m-banner-img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div>
      <div class="m-count">{{count}}</div>
      <button @click="handleSub">减</button>
      <button @click="handleAdd">加</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "app",
  data() {
    return {
      count: 0,
      bannerList: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
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
      url: "/api/getCarouselList"
    }).then(res => {
      if (res.data.code === 200) {
        this.bannerList = res.data.data;
      }
    });
  }
};
</script>
