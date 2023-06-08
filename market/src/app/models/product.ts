export interface Product {
    id?: string,
    code: string,
    description: string,
    unit_price: number,
    id_product_type: string,
    tax_rate?: number,
    type_code?: string,
    type_description?: string
}
