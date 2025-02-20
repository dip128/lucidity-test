
import { API_ENDPOINT } from "../constant/constant"


export const getProductDetails = () => {
    return fetch(API_ENDPOINT)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err))
}
