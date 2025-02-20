import { createContext } from "react";
import { ProductContextType } from "./types";


export const MyContext = createContext<ProductContextType | null>(null);