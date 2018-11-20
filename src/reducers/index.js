import { combineReducers } from "redux";
import HistoryTransactionReducer from "./reducer_historyTransaction";
import SupplierReducer from "./reducer_supplier";
import PromoUserReducer from "./reducer_promoUser";
//import users from "./userReducer";

const rootReducer = combineReducers({
  historyTransactions: HistoryTransactionReducer,
  suppliers: SupplierReducer,
  promoUsers: PromoUserReducer
  //users: users
});

export default rootReducer;
