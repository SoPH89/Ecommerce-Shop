import axios from "axios"

const URL = "http://localhost:5000/api/"
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWQ2ZTZjMzk2YzlmOWY3NDEzNDQ5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDE1NTU5OSwiZXhwIjoxNjQ0NDE0Nzk5fQ.wXl0m54ReEKNEC0V2fEoYHhMmXz63ux0Ych7NSjPbC0"



console.log(axios)
export const publicRequest = axios.create({
    baseURL: URL
})

export const userRequest = axios.create({
    baseURL: URL,
    headers: {
        token: `${Token}`
    }
})