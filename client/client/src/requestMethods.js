import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWQ2ZTZjMzk2YzlmOWY3NDEzNDQ5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDE1NTU5OSwiZXhwIjoxNjQ0NDE0Nzk5fQ.wXl0m54ReEKNEC0V2fEoYHhMmXz63ux0Ych7NSjPbC0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})