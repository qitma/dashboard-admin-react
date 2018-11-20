import {
  FETCH_PROMO_USER,
  FETCH_PROMO_USER_SUCCESS,
  FETCH_PROMO_USER_FAILURE,
  UPDATE_SELECTED_PROMO_USER,
  UPDATE_SELECTED_ALL_PROMO_USER
} from "../actions/promoUser";

const INITIAL_STATE_PROMO_USER = {
  promoUserList: {
    promoUsers: [],
    error: null,
    loading: false,
    page: {},
    isSelectedAll: false
  }
};

const checkUnSelected = promoUsers => {
  return promoUsers.filter(x => x.selected === false).length > 0;
};

const reducerPromoUser = (state = INITIAL_STATE_PROMO_USER, action) => {
  let error;
  switch (action.type) {
    case FETCH_PROMO_USER:
      return {
        ...state,
        promoUserList: {
          promoUsers: [],
          error: null,
          loading: true,
          page: null,
          isSelectedAll: false
        }
      };
    case FETCH_PROMO_USER_SUCCESS:
      return {
        ...state,
        promoUserList: {
          promoUsers: action.payload.data,
          error: null,
          loading: false,
          page: action.payload.page,
          isSelectedAll: action.payload.isSelectedAll
        }
      };
    case FETCH_PROMO_USER_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        promoUserList: {
          promoUsers: [],
          error: error,
          loading: false,
          page: null,
          isSelectedAll: false
        }
      };
    case UPDATE_SELECTED_PROMO_USER: {
      const id = action.payload;
      let newPromoUsers = state.promoUserList.promoUsers.map(x => {
        if (x.id == id) {
          x = { ...x, selected: !x.selected };
        }
        return x;
      });

      let selectedAll = !checkUnSelected(newPromoUsers);

      return {
        ...state,
        promoUserList: {
          ...state.promoUserList,
          promoUsers: newPromoUsers,
          isSelectedAll: selectedAll
        }
      };
    }

    //break;
    case UPDATE_SELECTED_ALL_PROMO_USER: {
      let selectedAll = checkUnSelected(state.promoUserList.promoUsers);
      let newPromoUsers = state.promoUserList.promoUsers.map(x => {
        return { ...x, selected: selectedAll };
      });

      return {
        ...state,
        promoUserList: {
          ...state.promoUserList,
          promoUsers: newPromoUsers,
          isSelectedAll: selectedAll
        }
      };
    }
    default:
      return state;
  }
};

export default reducerPromoUser;
