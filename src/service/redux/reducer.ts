import { combineReducers } from "redux";
import { responseTimeReducer } from "./responseTimeReducer";
import { insightReducer } from "./insightReducer";
import { categoryReducer } from "./categoryReducer";
import { userSatisfactionReducer } from "./userSatisfactionReducer";
import { distributionReducer } from "./distributionReducer";

export const rootReducer = combineReducers({
  insight: insightReducer,
  category: categoryReducer,
  responseTime: responseTimeReducer,
  userSatisfaction: userSatisfactionReducer,
  distribution: distributionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
