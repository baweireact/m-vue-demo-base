<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banner" :key="item.id">
        <img :src="item.image" class="m-banner-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <button @click="handleShowDialog">显示对话框</button>
    <Dialog 
      :visible="visible"
      title="我的标题"
      @onCancel="handleCancel"
      :btns="btns"
      >
      <div class="m-dialog-content">人生的刺，就在这里，留恋着不肯快走的，偏是你所不留恋的东西。</div>
      </Dialog>
    <div class="m-nav-wrap">
      <span
        v-for="(item, index) in bookNav"
        :key="item.id"
        class="m-nav-item"
        :class="{active: currentIndex === index}"
        @click="handleNav(index, item.id)"
      >{{item.title}}</span>
    </div>
    <div>
      <div v-for="item in bookList.list" :key="item.id" class="m-list-item">
        <img :src="item.avatar" class="m-list-item-img" />
        <div class="m-list-item-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Dialog from './components/Dialog'

export default {
  components: {
    Dialog
  },
  data() {
    return {
      banner: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      bookNav: [],
      currentIndex: 0,
      bookList: [],
      visible: false,
      btns: [{
        text: '取消',
        handler: this.handleCancel
      }, {
        text: '确定',
        handler: this.handleConfirm
      }]
    };
  },
  methods: {
    handleNav(index, id) {
      this.currentIndex = index;

      axios({
        url: `/api/book_list?id=${id}`
      }).then(res => {
        if (res.data.code === 200) {
          this.bookList = res.data.data;
        }
      });
    },
    handleShowDialog() {
      this.visible = true
    },
    handleCancel() {
      this.visible = false
    },
    handleConfirm() {
      this.visible = false
    }
  },
  mounted() {
    axios({
      url: "/api/banner"
    }).then(res => {
      if (res.data.code === 200) {
        this.banner = res.data.data;
      }
    });

    axios({
      url: "/api/book_nav"
    }).then(res => {
      if (res.data.code === 200) {
        this.bookNav = res.data.data;
      }
    });

    axios({
      url: "/api/book_list?id=0"
    }).then(res => {
      if (res.data.code === 200) {
        this.bookList = res.data.data;
      }
    });
  }
};
</script>

<style>
.m-banner-img {
  width: 100%;
}
</style>
