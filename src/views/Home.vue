<template>
  <main>
    <ImageList :imageList="imageList" />
  </main>
</template>

<script>
import ImageList from "@/components/ImageList";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { ImageList },
  computed: mapState(["imageList"]),
};
</script>
