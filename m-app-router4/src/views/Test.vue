<template>
  <div class="m-test-wrap">
    <div class="m-container" ref="container">
      <p>
        Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard
        tigernut jícama green bean celtuce.
      </p>
      <div class="m-select-wrap" ref="mySelect" @click="handleSelect">
        <el-select v-model="value" placeholder="请选择" @click.native="handleSelect" @change="handleBlur">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <p>
        Grape silver beet collard greens avocado quandong fennel gumbo black-eyed pea watercress potato tigernut corn
        groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout
        groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
        black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
      </p>
      <p>
        Grape silver beet collard greens avocado quandong fennel gumbo black-eyed pea watercress potato tigernut corn
        groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout
        groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
        black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
      </p>
      <p>
        Grape silver beet collard greens avocado quandong fennel gumbo black-eyed pea watercress potato tigernut corn
        groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout
        groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
        black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
      </p>
      <p>
        Grape silver beet collard greens avocado quandong fennel gumbo black-eyed pea watercress potato tigernut corn
        groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout
        groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
        black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
      </p>
      <p>
        Grape silver beet collard greens avocado quandong fennel gumbo black-eyed pea watercress potato tigernut corn
        groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout
        groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
        black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
      </p>
      <p>
        Grape silver beet collard greens avocado quandong fennel gumbo black-eyed pea watercress potato tigernut corn
        groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout
        groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
        black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleSelect() {{
      this.$refs.mySelect.scrollIntoView(true);
    }},
    handleBlur() {
      console.log(1)
      this.$refs.container.scrollIntoView(true);
    }
  }
};
</script>

<style>
</style>