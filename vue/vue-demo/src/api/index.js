import axios from "../utils/request";
import path from "./path"

const api = {
    getChengpin() {
        return axios.get(path.baseUrl + path.chengpin)
    },
    fingerUnion() {
        return axios.get(path.baseUrl + path.fingerUnion)
    },
    generator() {
        return axios.get(path.baseUrl + path.generator)
    }
}

export default api;