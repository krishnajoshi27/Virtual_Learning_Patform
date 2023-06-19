import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import signupTeacher from "../reducers/signupTeacherReducer";
import signupStudent from "../reducers/signupStudentReducer";
const rootReducer = combineReducers({
  // signUp: signUpReducer,
  logIn: loginReducer,
  signupTeacher: signupTeacher,
  signupStudent: signupStudent,
});
export default rootReducer;
