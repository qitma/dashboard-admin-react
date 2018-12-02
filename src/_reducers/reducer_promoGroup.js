import {
  FETCH_PROMO_GROUP,
  FETCH_PROMO_GROUP_SUCCESS,
  FETCH_PROMO_GROUP_FAILURE
} from "../_actions/promoGroup.fetch.jsx";
import {
  CREATE_PROMO_GROUP,
  CREATE_PROMO_GROUP_SUCCESS,
  CREATE_PROMO_GROUP_FAILURE
} from "../_actions/promoGroup.create.jsx";
import { Utility } from "../functions/Utility";

const INITIAL_STATE_PROMO_GROUP = {
  promoGroupList: {
    promoGroups: [],
    error: null,
    loading: false,
    page: {}
  },
  newPromoGroup: {
    promoGroup: {
      id: 0,
      name: "",
      markup: 0,
      minimumDeposit: 20,
      minimumTransaction: 0,
      minimumTransfer: 0,
      description: ""
    },
    error: null,
    loading: false
  }
};

const reducerPromoGroup = (state = INITIAL_STATE_PROMO_GROUP, action) => {
  let error, data;
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

    //section post data
    case CREATE_PROMO_GROUP:
      return {
        ...state,
        newPromoGroup: {
          promoGroup: {
            id: 0,
            name: "",
            markup: 0,
            minimumDeposit: 0,
            minimumTransaction: 0,
            minimumTransfer: 0,
            description: ""
          },
          error: null,
          loading: true
        }
      };
    case CREATE_PROMO_GROUP_SUCCESS:
      data = action.payload.data || action.payload;
      return {
        ...state,
        newPromoGroup: {
          promoGroup: data,
          error: null,
          loading: false
        }
      };
    case CREATE_PROMO_GROUP_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        newPromoGroup: {
          promoGroup: {
            id: 0,
            name: "",
            markup: 0,
            minimumDeposit: 0,
            minimumTransaction: 0,
            minimumTransfer: 0,
            description: ""
          },
          error: error,
          loading: false
        }
      };
    default:
      return state;
  }
};

export default reducerPromoGroup;
