<template>
  <div>
    <div class="m-message">{{message}}</div>
    <img :src="clothes_44kb">
    <img :src="clothes_79kb">
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
import clothes_44kb from '@/static/images/clothes_44kb.png'
import clothes_79kb from '@/static/images/clothes_79kb.png'

export default {
  data() {
    return {
      message: 'hello vue!12',
      clothes_44kb: clothes_44kb,
      clothes_79kb: clothes_79kb,
      count: 0
    }
  },
  methods: {
    handleAdd() {
      this.count = this.count + 1
    },
    handleSub() {
      this.count = this.count - 1
    }
  }
}
</script>

<style>
.m-count{font-size: 36px;color: #ff0000;}
</style>