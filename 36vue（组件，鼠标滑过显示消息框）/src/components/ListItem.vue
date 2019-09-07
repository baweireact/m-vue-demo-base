<template>
  <div
    @mouseenter="handleMouseEnter()"
    @mouseleave="handleMouseLeave"
    @click="handleDetail(item.id)"
  >
    <span class="m-list-item-name">{{item.name}}</span>
    <span class="m-list-item-name">{{item.status}}</span>
    <span
      class="m-list-item-code"
      :class="{ red: item.status === 'edited' || item.status === 'closed'}"
    >{{item.code}}</span>
    <TipBox :item="item" :info="tipBoxInfo"></TipBox>
  </div>
</template>

<script>
import axios from "axios";
import TipBox from "./TipBox";

export default {
  props: ["item"],
  data() {
    return {
      tipBoxInfo: {
        active: false,
        detailActive: false,
        followers: "",
        repos: "",
        following: ""
      }
    };
  },
  components: {
    TipBox
  },
  methods: {
    handleMouseEnter() {
      this.tipBoxInfo.active = true;
    },
    handleMouseLeave() {
      this.tipBoxInfo.active = false;
      this.tipBoxInfo.detailActive = false;
    },
    handleDetail(id) {
      axios({
        url: `/api/hover_list_detail?id=${id}`
      }).then(res => {
        if (res.data.code === 200) {
          this.tipBoxInfo.detailActive = true;
          this.tipBoxInfo.followers = res.data.data.followers;
          this.tipBoxInfo.repos = res.data.data.repos;
          this.tipBoxInfo.following = res.data.data.following;
        }
      });
    }
  }
};
</script>

<style>
</style>