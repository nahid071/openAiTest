import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Configure
http.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");

  if (user) {
    const token = JSON.parse(user.token);
    console.log(token);

    config.headers = {
      ...config.headers,
      Authorization: `Beader ${token}`,
    };
  }

  return config;
});

export default http;
