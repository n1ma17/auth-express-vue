import axios from "axios";

const instance = axios.create({
  // baseUrl: process.env.API_URL,
  baseURL: 'http://localhost:5000',
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
});
export default {
  install: ( app ) => {
    // app.config.globalProperties.$axios = instance;
    app.provide(/* key */ '$axios', /* value */ instance)

  },
};
