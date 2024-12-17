import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IInventory, Response } from "../../models/inventory";
import {
  fetchInventoryFailure,
  fetchInventorySuccess
} from "../../actions/inventoryActions";
import { inventoryTypes } from "../../actionTypes/inventoryTypes";
import { url } from "../../../helpers/url";

const getInventory = () => axios.get<Response>(url);

function* fetchInventorySaga() {
  try {
    //const response: Response = yield call(getInventory);
    const inventoryDummyresponseData: Response = {
      data: [{ category: 'Electronics', 
      name: 'Bluetooth',
      price: '100$',
      quantity: 5,
      value: '200' }]
    }
    yield put(
      fetchInventorySuccess({
        inventory: inventoryDummyresponseData.data
      })
    );
  } catch (e: any) {
    yield put(
      fetchInventoryFailure({
        error: e.message
      })
    );
  }
}

function* inventorySaga() {
  yield all([takeLatest(inventoryTypes.FETCH_INVENTORY_REQUEST, fetchInventorySaga)]);
}

export default inventorySaga;
