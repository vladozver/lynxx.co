<template>
  <div class="grid">
    <div :ref="image.id" v-for="image in imageList" :key="image.id">
      <p>{{ image.name }}</p>
      <img
        :src="`https://portal-tb.lynxx.co/api-test/image/${image.id}`"
        @click="goFullscreen(image.id)"
        @load="showImage(image.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageList",
  props: ["imageList"],
  methods: {
    showImage(id) {
      this.$refs[id][0].style.visibility = "visible";
    },
    goFullscreen(id) {
      this.$router.push({ name: "fullscreen", params: { id } });
    },
  },
};
</script>

<style scoped>
.grid {
  --auto-grid-min-size: 18rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 10px;
  padding: 60px 10px 10px 10px;
}

div > div {
  position: relative;
  visibility: hidden;
}

p {
  position: absolute;
  padding: 3px 8px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.33);
  font-size: 13px;
}

img {
  text-align: center;
  display: block;
  width: 100%;
  cursor: pointer;
}

@media only screen and (max-width: 300px) {
  .grid {
    --auto-grid-min-size: none;
  }
}
</style>
