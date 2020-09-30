import axios from "axios";

export default axios.create({
  baseURL: "https://portal-tb.lynxx.co/api-test/image/",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
