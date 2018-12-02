import { combineReducers } from "redux";
import HistoryTransactionReducer from "./reducer_historyTransaction";
import SupplierReducer from "./reducer_supplier";
import PromoUserReducer from "./reducer_promoUser";
import PromoGroupReducer from "./reducer_promoGroup";
//import users from "./userReducer";

const rootReducer = combineReducers({
  historyTransactions: HistoryTransactionReducer,
  suppliers: SupplierReducer,
  promoUsers: PromoUserReducer,
  promoGroups: PromoGroupReducer
  //users: users
});

export default rootReducer;
