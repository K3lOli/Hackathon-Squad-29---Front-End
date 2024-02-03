import axios from "axios";

export default axios.create({
    baseURL: "https://fcamaradeploy-api.onrender.com/api",
    timeout: 20000,
    headers: { "Content-Type": "application/json" },
});
