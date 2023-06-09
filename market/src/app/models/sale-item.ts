import { Product } from "./product"

export interface SaleItem {
    id?: string,
    quantity: number,
    price: number,
    tax: number,
    id_product: string,
    id_sale?: string,
    tax_rate?: number,
    product_code?: string,
    product_description?: string,
    unit_price?: number
}
