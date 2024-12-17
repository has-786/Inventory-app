import { IInventory } from "../models/inventory";
import { inventoryTypes } from "../actionTypes/inventoryTypes";

export interface InventoryState {
  pending: boolean;
  inventory: IInventory[];
  error: string | null;
}

export interface FetchInventorySuccessPayload {
  inventory: IInventory[];
}

export interface FetchInventoryFailurePayload {
  error: string;
}

export interface UpdateInventoryPayload {
  inventory: IInventory;
  idx: number;
}

export interface RemoveInventoryPayload {
  idx: number;
}

export interface FetchInventoryRequest {
  type: typeof inventoryTypes.FETCH_INVENTORY_REQUEST;
}

export type FetchInventorySuccess = {
  type: typeof inventoryTypes.FETCH_INVENTORY_SUCCESS;
  payload: FetchInventorySuccessPayload;
};

export type UpdateInventory = {
  type: typeof inventoryTypes.UPDATE_INVENTORY;
  payload: UpdateInventoryPayload;
};

export type RemoveInventory = {
  type: typeof inventoryTypes.REMOVE_INVENTORY;
  payload: RemoveInventoryPayload;
};

export type FetchInventoryFailure = {
  type: typeof inventoryTypes.FETCH_INVENTORY_FAILURE;
  payload: FetchInventoryFailurePayload;
};

export type InventoryActions =
  | FetchInventoryRequest
  | FetchInventorySuccess
  | FetchInventoryFailure
  | UpdateInventory
  | RemoveInventory;
