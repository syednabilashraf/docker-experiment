import axios from "axios";

export default axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3001/',
  headers: {
    "Content-type": "application/json"
  }
});