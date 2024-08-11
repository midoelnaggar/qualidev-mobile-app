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
    slotDate: string
    slotStartTime: string
    slotEndTime: string
}

interface IBooking {
    doctor: {
        name: string
        position: string
        about: string
    }
    date: string
    time: string
    location: string
}