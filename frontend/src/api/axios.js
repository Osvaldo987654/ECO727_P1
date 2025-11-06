import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // o el dominio de Render cuando lo subas
});
