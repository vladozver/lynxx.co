<template>
  <main ref="fullscreen" @change="fullscreenChange">
    <img
      :src="`https://portal-tb.lynxx.co/api-test/image/${id}`"
      :class="{ loaded }"
      @load="loaded = true"
    />
    <div class="ui">
      <div>
        {{ imageName(id) }}
      </div>
      <div class="close" @click="$router.go(-1)">CLOSE</div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import Vue from "vue";
import fullscreen from "vue-fullscreen";
Vue.use(fullscreen);

export default {
  name: "Fullscreen",
  props: {
    id: String,
  },
  data() {
    return {
      loaded: false,
      fullscreen: false,
    };
  },
  created() {
    this.toggle();
  },
  destroyed() {
    this.toggle();
  },
  methods: {
    toggle() {
      this.$fullscreen.toggle(this.$refs["fullscreen"], {
        wrap: false,
        callback: this.fullscreenChange,
      });
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
  },
  computed: mapGetters(["imageName"]),
};
</script>

<style scoped>
main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  background-color: #fff;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease;
  opacity: 0;
  transform: scale(1.2);
}

.loaded {
  opacity: 1;
  transform: scale(1);
}

.ui {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 22px;
  font-weight: 300;
  z-index: 1001;
}

.ui div {
  padding: 3px 12px;
  background-color: rgba(0, 0, 0, 0.33);
}

.close {
  cursor: pointer;
}

@media only screen and (max-width: 300px) {
  .ui {
    font-size: 16px;
  }
}
</style>