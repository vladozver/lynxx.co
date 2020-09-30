import http from "@/http-common";

class imageService {
  imageList() {
    return http.get(`/list`);
  }

  get(id) {
    return http.get(`/${id}`);
  }
}

export default new imageService();
