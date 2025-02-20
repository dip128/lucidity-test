

export interface IProduct {
    id: number;
    name: string;
    category: string;
    price: string;
    quantity: number;
    value: string;
    isDisabled: boolean

  }
  export type ProductContextType = {
    products: IProduct[];
    totalProduct: number;
    totalStoreValue: number;
    outofStock: number;
    totalCategory: number;
    isUserMode: boolean;
    updateProduct: (values: any) => void;
  };

