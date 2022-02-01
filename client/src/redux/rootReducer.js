import { combineReducers } from "redux";
import * as studentReducer from "./student/student.reducer";

const rootReducer = combineReducers({
  students: studentReducer.reducer,
});
export default rootReducer;
