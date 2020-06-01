import axios from '../utils/axios'

export const login = (email, password) => axios.patch('/auth/login', { user: { email, password } })
    .then(res => res.data)