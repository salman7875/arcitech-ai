import { AnyAction } from "redux";
import { ACTIONS } from "../../types";

export type ResponseTimeDataType = {
  data: { day_wise: any[]; week_wise: any[] };
};

export type ResponseTimeType = {
  isLoading: boolean;
  data: ResponseTimeDataType["data"];
  isActive: "day" | "week";
  error: null | string;
};

const initialState: ResponseTimeType = {
  isLoading: false,
  data: { day_wise: [], week_wise: [] },
  isActive: "day",
  error: null,
};

export const responseTimeReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ACTIONS.RESPONSE_TIME.FETCH_START:
      return { ...state, isLoading: true, error: null };
    case ACTIONS.RESPONSE_TIME.FETCH_SUCCESS:
      const data = {
        day_wise: action.payload.day_wise.map((d: any) => ({
          item: d.date,
          value: d.average_time,
        })),
        week_wise: action.payload.week_wise.map((d: any) => ({
          item: d.week,
          value: d.average_time,
        })),
      };
      return { isLoading: false, data: data, error: null };
    case ACTIONS.RESPONSE_TIME.FETCH_FAIL:
      return {
        isLoading: false,
        data: {},
        error: action.payload,
        isActive: "day",
      };
    case ACTIONS.RESPONSE_TIME.TOGGLE:
      return { ...state, isActive: action.payload };

    default: {
      return state;
    }
  }
};
