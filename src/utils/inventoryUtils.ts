import { IProduct } from "../types";


export const getTotalValues = (productDetails: Array<IProduct>): any => {

    let category  = new Set()
    let totalProduct = productDetails.length;
    let outofStock = 0;
    let totalCategory = 0;
    let totalStoreValue = 0
    productDetails.map((item) => {
        if(item.quantity === 0) outofStock++;
        category.add(item.category)
        totalStoreValue = totalStoreValue + Number(item.value.slice(1))

    })
    totalCategory = category.size

    return {
        totalProduct,
        outofStock,
        totalCategory,
        totalStoreValue
    }

}