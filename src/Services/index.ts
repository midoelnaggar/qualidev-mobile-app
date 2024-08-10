import Axios from "axios"

export const apiUrls = {
    register: "/Accounts/register",
    login: "/Accounts/login",
}

export const axios = Axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL || "http://q.microclouddevelopment.com/api" })