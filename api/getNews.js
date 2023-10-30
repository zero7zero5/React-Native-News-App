import api from "./client";
const getNews = () => {
  return api.get(
    "/top-headlines?country=in&apiKey=${Your_apikey}"
  );
};
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=${Your_apikey}`);
};
export default {
  getNews,
  searchedNews,
};
