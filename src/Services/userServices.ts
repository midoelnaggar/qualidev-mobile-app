import { apiUrls, axios } from "."

const userServices = {
    login: (params: ILoginPayload) => {
        const res = axios.post(apiUrls.login, {}, { params })
        console.log(res);
        return res
    },
    register: (params: IRegisterPayload) => {
        return axios.post(apiUrls.register, {}, { params })
    },
}

export default userServices