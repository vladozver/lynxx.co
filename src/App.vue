<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: { Header },
  created() {
    document.addEventListener("swReady", this.swReady, { once: true });
  },
  methods: {
    swReady() {
      setTimeout((that) => that.$store.dispatch("FETCH_IMAGE_LIST"), 100, this);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap");

html {
  background-color: #fff;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #fff;
}
</style>
