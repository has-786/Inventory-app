import { all, fork } from "redux-saga/effects";
import inventorySaga from "./inventorySaga";

export function* rootSaga() {
  yield all([fork(inventorySaga)]);
}
