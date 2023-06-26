import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import signupTeacher from "../reducers/signupTeacherReducer";
import signupStudent from "../reducers/signupStudentReducer";
import newsReducer from "../reducers/newsReducer";
const rootReducer = combineReducers({
  // signUp: signUpReducer,
  logIn: loginReducer,
  signupTeacher: signupTeacher,
  signupStudent: signupStudent,
  newsReducer: newsReducer,
});
export default rootReducer;
