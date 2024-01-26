import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 20000,
    headers: { "Content-Type": "application/json" },
});
