import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '879a927553f64372afa991f87f664f2a'
        }
})