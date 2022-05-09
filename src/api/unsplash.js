import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Yf0o1QPuPtFzj1uWxW3wZ10k7p2amSpmIf6CW7Q6-yQ",
  },
});
