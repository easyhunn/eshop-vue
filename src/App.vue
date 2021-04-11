<template>
  <div id="app">
    <Menu />
    <Header />
    <Content />
  </div>
</template>

<script>
import "./components/css/icon.css";
import "./components/css/table.css";
import "./components/css/button.css";
import "./components/css/common.css";
import "./components/css/font.css";
import "./components/css/input.css";
import "./components/css/main.css";
import "./components/css/footer.css";

import Menu from "../src/components/layout/Menu.vue";
import Header from "../src/components/layout/Header.vue";
import Content from "../src/components/layout/Content.vue";
export default {
  name: "App",
  components: {
    Menu,
    Header,
    Content
  },
};
</script>

