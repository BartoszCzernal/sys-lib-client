import axios from "axios";
import Config from "../config";

export default axios.create({
  baseURL: `http://${Config.HOST}:${Config.PORT}/`,
  headers: {
    "Content-type": "application/json",
  },
});
