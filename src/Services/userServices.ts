import { apiUrls, axios } from "."

const userServices = {
    login: (params: ILoginPayload) => {
        return axios.post(apiUrls.login, {}, { params })
    },
    register: (params: IRegisterPayload) => {
        return axios.post(apiUrls.register, {}, { params })
    },
}

export default userServices