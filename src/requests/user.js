import axios from '../utils/axios'

export const login = (email, password) => axios.patch('/auth/login', { user: { email, password } })
    .then(res => res.data)

export const getMe = () => axios.get('/users/me')
    .then(res => res.data)