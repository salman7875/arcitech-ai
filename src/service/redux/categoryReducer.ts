import { AnyAction } from "redux";
import { ACTIONS } from "../../types";
import { transformToObjectArray } from "../utils/helper";

export type CategoryDataType = {
  value: string;
  item: string;
};

export type CategoryType = {
  data: CategoryDataType[];
  isLoading: false;
  error: null | string;
};

const initialState: CategoryType = {
  isLoading: false,
  data: [],
  error: null,
};

export const categoryReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.CATEGORIES.FETCH_START:
      return { ...state, isLoading: true, error: null };
    case ACTIONS.CATEGORIES.FETCH_SUCCESS:
      const data = transformToObjectArray(action.payload);
      return { isLoading: false, data: data, error: null };
    case ACTIONS.CATEGORIES.FETCH_FAIL:
      return { isLoading: false, data: {}, error: action.payload };
    default: {
      return state;
    }
  }
};
