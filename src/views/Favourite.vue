<template>
  <main>
    <ImageList :imageList="favuoriteList" />
  </main>
</template>

<script>
import ImageList from "@/components/ImageList";
import { mapGetters } from "vuex";

export default {
  name: "Favourite",
  components: { ImageList },
  computed: mapGetters(["favuoriteList"]),
};
</script>
