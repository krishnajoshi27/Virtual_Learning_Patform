import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import signupTeacher from "../reducers/signupTeacherReducer";
import signupStudent from "../reducers/signupStudentReducer";
import newsReducer from "../reducers/newsReducer";
import getStudentReducer from "../reducers/studentHomeGetReducer";
const rootReducer = combineReducers({
  // signUp: signUpReducer,
  logIn: loginReducer,
  signupTeacher: signupTeacher,
  signupStudent: signupStudent,
  newsReducer: newsReducer,
  getStudentReducer:getStudentReducer
});
export default rootReducer;
