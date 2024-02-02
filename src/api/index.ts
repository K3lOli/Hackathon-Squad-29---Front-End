import axios from "axios";

export default axios.create({
    baseURL: "https://fcamaradeploy-api.onrender.com",
    timeout: 20000,
    headers: { "Content-Type": "application/json" },
});
