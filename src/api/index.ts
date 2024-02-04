import axios from "axios";

export default axios.create({
    baseURL: "https://fcamaradeploy-api.onrender.com/api",
    // baseURL: "http://localhost:8000/api",
    timeout: 20000,
    headers: { "Content-Type": "application/json" },
});
