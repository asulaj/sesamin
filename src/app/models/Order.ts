import {IProduct} from './Product';
export interface IOrder {
    id:string;
    date: string;
    product: IProduct;
    quantity: number;
}