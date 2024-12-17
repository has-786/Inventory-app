import { act } from "react";
import { inventoryTypes } from "../../actionTypes/inventoryTypes";
import { InventoryActions, InventoryState } from "../../types/types";

const initialState: InventoryState = {
  pending: false,
  inventory: [],
  error: null
};

export default (state = initialState, action: InventoryActions) => {
  switch (action.type) {
    case inventoryTypes.FETCH_INVENTORY_REQUEST:
      return {
        ...state,
        pending: true
      };
    case inventoryTypes.FETCH_INVENTORY_SUCCESS:{
     console.log('success action', action)
      return {
        ...state,
        pending: false,
        inventory: action.payload.inventory,
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
        console.log('update action', action)
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
        console.log('remove action', action)
        const newInventory = [ ...state.inventory ]
        newInventory.splice(action.payload.idx, 1)
        console.log('remove -> newInventory', newInventory)
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
