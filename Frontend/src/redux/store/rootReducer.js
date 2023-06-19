import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
const rootReducer = combineReducers({
  // signUp: signUpReducer,
  logIn: loginReducer,
});
export default rootReducer;
