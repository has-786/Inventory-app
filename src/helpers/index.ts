import { IInventory } from "../redux/models/inventory"

const fields = [
    { name: 'category', placeholder: 'phone' },
    { name: 'price', placeholder: '50' },
    { name: 'quantity', placeholder: '0' },
    { name: 'value', placeholder: '0' }
  ]

  const getCardItems = (inventoryItems: IInventory[]) => {
    const totalProduct = inventoryItems.filter(i => !i.disabled).length,
    outOfStock = inventoryItems.filter(i => !i.disabled && i.quantity === 0).length,
    totalStoreValue = inventoryItems.filter(i => !i.disabled).map(i => i.value).reduce((a, b) => +a + +b, 0),
    numCategory = [ ...new Set(inventoryItems.filter(i => !i.disabled).map(i => i.category)) ].length
    return {
        totalProduct,
        outOfStock,
        totalStoreValue,
        numCategory
    }
}
const headings = [ 'name', 'category', 'price', 'quantity', 'value', 'action' ]

export {
    getCardItems,
    fields,
    headings
}