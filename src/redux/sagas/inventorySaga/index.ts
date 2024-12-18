import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Response } from "../../models/inventory";
import {
  fetchInventoryFailure,
  fetchInventorySuccess
} from "../../actions/inventoryActions";
import { inventoryTypes } from "../../actionTypes/inventoryTypes";
import { url } from "../../../helpers/url";

function* fetchInventorySaga() {
  try {
    const response: Response = yield call(() => axios.get<Response>(url))

    yield put(
      fetchInventorySuccess({
        inventory: response.data
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
