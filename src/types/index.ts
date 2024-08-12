interface ILoginPayload {
    username: string
    password: string
}

interface IRegisterPayload {
    username: string
    password: string
    account_type_id: string
    patient_name: string
    phone: string
    image_path: string
}

interface IGetSlotsPayload {
    clinic_id: number
    doctor_id: number
    slot_date: Date
}

interface ISlot {
    id: number;
    slotDate: string
    slotStartTime: string
    slotEndTime: string
}
interface IAddBookingPayload {
    slot_id: number
    patient_account_id: number
    loc_long: string
    loc_lat: string
    note: string
}

interface IBooking {
    id: number;
    statusId: number;
    locationLong: string;
    locationLat: string;
    estimatedTime: string;
    notes: string;
    accountId: number;
    slotId: number;
    slotDate: string;
    slotStartTime: string;
    slotEndTime: string;
    doctorName: string;
    patientName: string;
    patientPhone: string;
}

interface IGetBookingsPayload {
    page_size: number
    page_num: number
    year: number
    month: number
    patient_id: number
}

interface IAlertPayload {
    alertType: AlertType
    message: string
}
type AlertType = "error" | "warning" | "info" | "success" 