import { inventoryTypes } from "../actionTypes/inventoryTypes";
import {
  FetchInventoryFailure,
  FetchInventoryFailurePayload,
  FetchInventoryRequest,
  FetchInventorySuccess,
  FetchInventorySuccessPayload,
  UpdateInventoryPayload,
  RemoveInventoryPayload,
  UpdateInventory,
  RemoveInventory
} from "../types/types";

export const fetchInventoryRequest = (): FetchInventoryRequest => ({
  type: inventoryTypes.FETCH_INVENTORY_REQUEST
});

export const fetchInventorySuccess = (
  payload: FetchInventorySuccessPayload
): FetchInventorySuccess => ({
  type: inventoryTypes.FETCH_INVENTORY_SUCCESS,
  payload
});

export const fetchInventoryFailure = (
  payload: FetchInventoryFailurePayload
): FetchInventoryFailure => ({
  type: inventoryTypes.FETCH_INVENTORY_FAILURE,
  payload
});

export const updateInventory = (
  payload: UpdateInventoryPayload
): UpdateInventory => ({
  type: inventoryTypes.UPDATE_INVENTORY,
  payload
});

export const removeInventory = (
  payload: RemoveInventoryPayload
): RemoveInventory => ({
  type: inventoryTypes.REMOVE_INVENTORY,
  payload
});