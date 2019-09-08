<template>
  <div id="app">
    <button @click="handleShow1">老崔</button>
    <button @click="handleShow2">小胡子</button>
    <Dialog :visible="visible1" title="老崔" @onCancel="handleCancel" :btns="btns">
      <template v-slot:content>
        <div>人生的刺，就在这里，留恋着不肯快走的，偏是你所不留恋的东西。</div>
      </template>
    </Dialog>
    <Dialog :visible="visible2" title="123" @onCancel="handleCancel" :btns="btns2">
      <template v-slot:content>
        <div>123人生的刺，就在这里，留恋着不肯快走的，偏是你所不留恋的东西。</div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "./components/Dialog";

export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      username: "",
      btns: [
        {
          text: "取消",
          handler: this.handleCancel
        },
        {
          text: "确定",
          handler: this.handleConfirm1
        }
      ],
      btns2: [
        {
          text: "取消",
          handler: this.handleCancel
        },
        {
          text: "确定",
          handler: this.handleConfirm2
        }
      ]
    };
  },
  components: {
    Dialog
  },
  methods: {
    handleShow1() {
      this.visible1 = true;
    },
    handleShow2() {
      this.visible2 = true;
    },
    handleCancel() {
      this.visible1 = false;
      this.visible2 = false;
    },
    handleConfirm1() {
      console.log(1);
      this.handleCancel();
    },
    handleConfirm2() {
      console.log(2);
      this.handleCancel();
      console.log(this.username);
    }
  }
};
</script>
