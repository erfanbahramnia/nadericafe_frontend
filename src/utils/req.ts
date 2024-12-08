import axios from "axios"
import { LoginCredential } from "../types/types"
import { LoginUrl } from "../common/urls"

export async function LoginWithCredential(data: LoginCredential): Promise<string>{
    const url = LoginUrl
    try {
        const res = await axios.post(url, {
            ...data
        })
        return res.data.jwt

    } catch(error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response ? error.response.data : error.message);
        } else {
            throw new Error("Unexpected error!");
        }
    }
}