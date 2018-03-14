import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerapp-453a9.firebaseio.com/"
});

export default instance;
