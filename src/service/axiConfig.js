import axios from "axios";

const axi = axios.create({
  //#TODO: Implement production url
  baseURL: process.env.NODE_ENV !== "production" ? "http://127.0.0.1:8000/api" : "",
  withCredentials: true,
})

export default axi;
