

export const parseProduct = (product: any): Array<any> => {
    return product?.map((item: any, id: number) => {
        return {
            id: id + 1 || 100,
            name: item?.name,
            category: item?.category,
            value: item?.value,
            quantity: item?.quantity,
            price: item?.price,
            isDisabled: false,
        }
    })
}