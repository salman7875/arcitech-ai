import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ACTIONS, ENDPOINT, KEY_ACTION } from "../../types";

export const fetcher = (endpoint: ENDPOINT, key: KEY_ACTION) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: ACTIONS[key].FETCH_START });
    try {
      const res = await fetch(`http://localhost:4000/${endpoint}`);
      const data = await res.json();
      dispatch({ type: ACTIONS[key].FETCH_SUCCESS, payload: data });
    } catch (err: any) {
      dispatch({ type: ACTIONS[key].FETCH_FAIL, payload: err.message });
    }
  };
};
