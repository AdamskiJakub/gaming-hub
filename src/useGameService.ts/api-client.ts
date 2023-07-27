import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "094dfa878bc54f4f8b3e732df3b97a5e",
  },
});
