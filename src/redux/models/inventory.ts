export interface IInventory {
    category: string,
    name: string,
    price: string,
    quantity: number,
    value: string,
    disabled?: boolean
}
  
export interface Response {
    data: IInventory[]
}