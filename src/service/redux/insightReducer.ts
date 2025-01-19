import { AnyAction } from "redux";
import { ACTIONS } from "../../types";

export type InsightDataType = {
  value: string;
  item: string;
};

export type InsightType = {
  isLoading: boolean;
  data: InsightDataType[];
  error: null | string;
};

const initialState: InsightType = {
  isLoading: false,
  data: [],
  error: null,
};

export const insightReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.INSIGHT.FETCH_START:
      return { ...state, isLoading: true, error: null };
    case ACTIONS.INSIGHT.FETCH_SUCCESS:
      const data = Object.entries(action.payload).map((d, idx) => ({
        item: d.at(0),
        value: d.at(1),
      }));
      return { isLoading: false, data: data, error: null };
    case ACTIONS.INSIGHT.FETCH_FAIL:
      return { isLoading: false, data: {}, error: action.payload };
    default: {
      return state;
    }
  }
};
