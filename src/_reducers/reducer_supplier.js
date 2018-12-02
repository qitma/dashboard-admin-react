import {
  FETCH_SUPPLIER,
  FETCH_SUPPLIER_SUCCESS,
  FETCH_SUPPLIER_FAILURE
} from "../_actions/supplier";
import { Utility } from "../functions/Utility";

const INITIAL_STATE_SUPPLIER = {
  supplierList: {
    suppliers: [],
    error: null,
    loading: false,
    page: {}
  }
};

const reducerSupplier = (state = INITIAL_STATE_SUPPLIER, action) => {
  let error;
  switch (action.type) {
    case FETCH_SUPPLIER:
      return {
        ...state,
        supplierList: {
          suppliers: [],
          error: null,
          loading: true,
          page: null
        }
      };
    case FETCH_SUPPLIER_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        supplierList: {
          suppliers: action.payload.data,
          error: null,
          loading: false,
          page: action.payload.page
        }
      };
    }

    case FETCH_SUPPLIER_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        supplierList: {
          suppliers: [],
          error: error,
          loading: false,
          page: null
        }
      };
    default:
      return state;
  }
};

export default reducerSupplier;
