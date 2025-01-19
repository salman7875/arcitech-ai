import { AnyAction } from "redux";
import { ACTIONS } from "../../types";

export type UserSatisfactionDataType = {
  count: number;
  rating: number;
};

export type UserSatisfactionType = {
  isLoading: boolean;
  data: UserSatisfactionDataType[];
  error: null | string;
};

const initialState: UserSatisfactionType = {
  isLoading: false,
  data: [],
  error: null,
};

export const userSatisfactionReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ACTIONS.USER_SATISFACTION.FETCH_START:
      return { ...state, isLoading: true, error: null };
    case ACTIONS.USER_SATISFACTION.FETCH_SUCCESS:
      return { isLoading: false, data: action.payload.ratings, error: null };
    case ACTIONS.USER_SATISFACTION.FETCH_FAIL:
      return { isLoading: false, data: {}, error: action.payload };
    default: {
      return state;
    }
  }
};
