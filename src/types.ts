

export interface IProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    value: number;
    isDisabled: boolean

  }
  export type ProductContextType = {
    products: IProduct[];
    totalProduct: number;
    totalStoreValue: number;
    outofStock: number;
    totalCategory: number;
    isUserMode: boolean;
    updateProduct: (id: number , values: any) => void;
  };

