import {
  FETCH_PROMO_GROUP,
  FETCH_PROMO_GROUP_SUCCESS,
  FETCH_PROMO_GROUP_FAILURE
} from "../actions/promoGroup";
import { Utility } from "../functions/Utility";

const INITIAL_STATE_PROMO_GROUP = {
  promoGroupList: {
    promoGroups: [],
    error: null,
    loading: false,
    page: {}
  }
};

const reducerPromoGroup = (state = INITIAL_STATE_PROMO_GROUP, action) => {
  let error;
  switch (action.type) {
    case FETCH_PROMO_GROUP:
      return {
        ...state,
        promoGroupList: {
          promoGroups: [],
          error: null,
          loading: true,
          page: null
        }
      };
    case FETCH_PROMO_GROUP_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        promoGroupList: {
          promoGroups: action.payload.data,
          error: null,
          loading: false,
          page: action.payload.page
        }
      };
    }

    case FETCH_PROMO_GROUP_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        promoGroupList: {
          promoGroups: [],
          error: error,
          loading: false,
          page: null
        }
      };
    default:
      return state;
  }
};

export default reducerPromoGroup;
