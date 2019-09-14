<template>
  <div class="m-home">
    <BookNav></BookNav>
    <List></List>
  </div>
</template>

<script>
import BookNav from "../components/BookNav";
import List from "../components/List";

export default {
  components: {
    BookNav,
    List
  }
};
</script>
