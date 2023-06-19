import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupApi } from "../redux/actions/signupStudentAction";
import { useDispatch } from "react-redux";

function SignupStudent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gradLevel, setGradLevel] = useState('');
  const [areaOfStudy, setAreaOfStudy] = useState('');
  const [skills, setSkills] = useState('');
  const [language, setLanguage] = useState('');


  const signUpStudentApiCall = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const sendData = {
      name: fullName,
      email: email,
      password: password,
      grade_level: gradLevel,
      area_of_study: areaOfStudy,
      skills: skills,
      language:language
    }
    console.log('sendData... ', sendData);
    dispatch(SignupApi(sendData));
  }

  return (
    <>
      <div className="login-container">
        <div className="screen2">
          <div className="screen__content2">
            <h3 className="singupheading" style={{ fontWeight: "600" }}>
              Signup as a Student
            </h3>
            <form className="login2">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input2"
                  placeholder="Full Name"
                  onChange={(e)=>setFullName(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input2"
                  placeholder="Email Address"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="password"
                  className="login__input2"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="login__field">
                <select name="Level" className="login__input2" value={gradLevel} onChange={(e) => setGradLevel(e.target.value)}>
                  <option value="">Grade/Level</option>
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                  <option value="Third">Third</option>
                  <option value="Fourth">Fourth</option>
                  <option value="Fifth">Fifth</option>
                  <option value="Sixth">Sixth</option>
                </select>
              </div>

              <div className="login__field">
                <select
                  name="Area of study"
                  id="pet-select"
                  className="login__input2"
                  value={areaOfStudy} onChange={(e) => setAreaOfStudy(e.target.value)}
                >
                  <option value="">Area of study</option>
                  <option value="High School Diploma">High School Diploma</option>
                  <option value="Associate's Degree">Associate's Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD or Doctorate">PhD or Doctorate</option>
                  <option value="Teaching Certification">Teaching Certification</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* <div className="login__field">
                <select
                  name="Learning Objective"
                  id="pet-select"
                  className="login__input2"
                >
                  <option value="">Learning Objective</option>
                  <option value="volvo">More than 1 year</option>
                  <option value="saab">1-3 years</option>
                  <option value="opel">3-5 years</option>
                  <option value="audi">5-10 years</option>
                  <option value="audi">More Than 10 years</option>
                </select>
              </div> */}
              <div className="login__field">
                <select name="Skills" id="pet-select" className="login__input2"  value={skills} onChange={(e) => setSkills(e.target.value)}>
                  <option value="">Skills</option>
                  <option value="Python">Python</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Reactjs">Reactjs</option>
                  <option value="Nodejs">Nodejs</option>
                  <option value="SQL">SQL</option>
                  <option value="Mongo">Mongo</option>
                </select>
              </div>
              <div className="login__field">
                <select
                  name="Preferred language"
                  id="pet-select"
                  className="login__input2"
                  value={language} onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="English(US)">English(US)</option>
                  <option value="Englist(UK)">Englist(UK)</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <h5
                className="signup"
                onClick={() => {
                  navigate("/");
                }}
                style={{ textDecoration: "underline", fontSize: "17px" }}
              >
                Don't have account login
              </h5>
            </form>

            {/* <Link to="/Home"  > */}
              <button className="signupbtn"   onClick={
                  signUpStudentApiCall
                  // navigate("/Home");
                }>Signup</button>
            {/* </Link> */}
            <div className="social-login">
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape1">
              KNOWLEDGE LAND VIRTUAL LEARNING PLATFORM
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupStudent;
