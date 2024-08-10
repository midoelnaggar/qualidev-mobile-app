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
