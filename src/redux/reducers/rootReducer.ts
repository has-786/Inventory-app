
import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducers/index";

const rootReducer = combineReducers({
  inventory: inventoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
