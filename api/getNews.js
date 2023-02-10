import api from "./client";
const getNews = () => {
  return api.get(
    "/top-headlines?country=in&apiKey=ec1cd982aae64a2faee053fe4e93826c"
  );
};
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=ec1cd982aae64a2faee053fe4e93826c`);
};
export default {
  getNews,
  searchedNews,
};
