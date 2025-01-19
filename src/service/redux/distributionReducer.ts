import { AnyAction } from "redux";
import { ACTIONS } from "../../types";
import { transformToObjectArray } from "../utils/helper";

export type DistributionDataType = {
  data: { by_platform: any[]; by_country: any[] };
};

export type DistributionType = {
  isLoading: boolean;
  data: DistributionDataType["data"];
  isActive: "platform" | "country";
  error: null | string;
};

const initialState: DistributionType = {
  isLoading: false,
  data: { by_platform: [], by_country: [] },
  isActive: "platform",
  error: null,
};

export const distributionReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ACTIONS.DISTRIBUTION.FETCH_START:
      return { ...state, isLoading: true, error: null };
    case ACTIONS.DISTRIBUTION.FETCH_SUCCESS:
      const data = {
        by_platform: transformToObjectArray(action.payload.by_platform),
        by_country: transformToObjectArray(action.payload.by_country),
      };

      return {
        isLoading: false,
        data: data,
        error: null,
        isActive: "platform",
      };
    case ACTIONS.DISTRIBUTION.FETCH_FAIL:
      return { isLoading: false, data: {}, error: action.payload };
    case ACTIONS.DISTRIBUTION.TOGGLE:
      return { ...state, isActive: action.payload };
    default: {
      return state;
    }
  }
};
