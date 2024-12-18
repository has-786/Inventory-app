import { inventoryTypes } from "../../actionTypes/inventoryTypes";
import { InventoryActions, InventoryState } from "../../types/types";

const initialState: InventoryState = {
  pending: false,
  inventory: [],
  error: null
};

const inventoryReducer = (state = initialState, action: InventoryActions) => {
  switch (action.type) {
    case inventoryTypes.FETCH_INVENTORY_REQUEST:
      return {
        ...state,
        pending: true
      };

    case inventoryTypes.FETCH_INVENTORY_SUCCESS:{
      const newInventory = action.payload.inventory.map(item => ({ ...item, price: item.price[0] === '$' ? item.price.slice(1) : item.price, value: item.value[0] === '$' ? item.value.slice(1) : item.value }))
      
      return {
        ...state,
        pending: false,
        inventory: newInventory,
        error: null
      };
    }

    case inventoryTypes.FETCH_INVENTORY_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };

    case inventoryTypes.UPDATE_INVENTORY:{
      const newInventory = [ ...state.inventory ]
      newInventory[action.payload.idx] = action.payload.inventory
        
      return {
        ...state,
        pending: false,
        inventory: newInventory,
        error: null
      };
    }

    case inventoryTypes.REMOVE_INVENTORY:{
      const newInventory = [ ...state.inventory ]
      newInventory.splice(action.payload.idx, 1)

      return {
        ...state,
        pending: false,
        inventory: newInventory,
        error: null
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default inventoryReducer
