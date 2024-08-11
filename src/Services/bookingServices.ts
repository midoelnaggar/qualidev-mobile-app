import { axios, apiUrls } from "."

const bookingServices = {
    getSlots: (params: IGetSlotsPayload) => {
        return axios.post(apiUrls.getSlots, {}, { params })
    }
}
export default bookingServices