import axios from "axios";
import config from "./config/index.js";

export default async () => {
    const requestPath = `http://${config.state.ip}:${config.state.port}/state`;
    return axios.get(requestPath);
}