import { SaleItem } from "./sale-item";

export interface Sale {
    id: string,
    total: number,
    tax: number,
    date_time: string,
    items: SaleItem[];
}
