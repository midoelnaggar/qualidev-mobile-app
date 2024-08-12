import { axios, apiUrls } from "."

const bookingServices = {
    getSlots: (params: IGetSlotsPayload) => {
        return axios.post(apiUrls.getSlots, {}, { params })
    },
    addBooking: (params: IAddBookingPayload) => {
        return axios.post(apiUrls.addBooking, {}, { params })
    },
    getBookings: (params: IGetBookingsPayload) => {
        return axios.post(apiUrls.getBookings, {}, { params })
    },
}
export default bookingServices