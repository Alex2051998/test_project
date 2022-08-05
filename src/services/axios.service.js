import axios from "axios";

import baseURL from "../constans/const";

const axiosService = axios.create({baseURL});

export {
    axiosService
}