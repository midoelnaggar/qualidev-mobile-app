import Axios from "axios"

export const apiUrls = {
    register: "/Accounts/register",
    login: "/Accounts/login",
}

export const axios = Axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL || "https://q.microclouddevelopment.com/api" })