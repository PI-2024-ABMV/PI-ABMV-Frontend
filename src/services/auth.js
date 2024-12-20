import axios from "axios";

class AuthService {
    async login(credentials) {
        console.log(credentials)
        const response = await axios.post('token/', credentials)
        return response.data
    }
    async register(credentials) {
        console.log(credentials)
        const response = await axios.post("usuarios/", credentials)
        return response.data
    }
}

export default new AuthService()