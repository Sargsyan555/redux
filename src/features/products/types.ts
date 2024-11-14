export interface IProduct{
    id: number,
    price: number,
    title: string,
    rate: number,
    picture:string
}
export interface IState{
    items: IProduct[]
    cart: ImputProduct[]
    currentProduct: IProduct
}
export interface IRate{
    id:number,
    rate: number
}
export type ImputProduct = Omit<IProduct, 'id'>