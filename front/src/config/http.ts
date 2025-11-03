import axios, {type AxiosResponse } from "axios";

export const Axios = axios.create({
    baseURL: "http://localhost:80/api/",
});

export type {AxiosResponse}