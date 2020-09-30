import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import ImageService from "@/services/ImageService";

export default new Vuex.Store({
  state: {
    imageList: [],
  },
  getters: {
    favuoriteList(state) {
      return state.imageList.filter((el) => el.favourite);
    },
    imageName(state) {
      return (id) => {
        if (state.imageList.length === 0) return "";
        return state.imageList.find((el) => el.id === id).name;
      };
    },
  },
  mutations: {
    saveImageList(state, data) {
      state.imageList = data;
    },
  },
  actions: {
    FETCH_IMAGE_LIST({ commit, state }) {
      if (state.imageList.length !== 0) return;

      ImageService.imageList()
        .then((res) => commit("saveImageList", res.data))
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
