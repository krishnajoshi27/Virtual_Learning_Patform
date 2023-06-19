import React from "react";
import { useNavigate } from "react-router-dom";

function SignupTeacher() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <div className="screen2">
          <div className="screen__content2">
            <h3 className="singupheading" style={{ fontWeight: "600" }}>
              Signup as a teacher
            </h3>
            <form className="login2">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input2"
                  placeholder="Full Name"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input2"
                  placeholder="Email Address"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="password"
                  className="login__input2"
                  placeholder="Password"
                />
              </div>
              <div className="login__field">
                <select name="pets" id="pet-select" className="login__input2">
                  <option value="">Specialization</option>
                  <option value="dog">Python</option>
                  <option value="cat">JavaScript</option>
                  <option value="hamster">Reactjs</option>
                  <option value="parrot">Nodejs</option>
                  <option value="parrot">SQL</option>
                  <option value="audi">Mongo</option>
                </select>
              </div>

              <div className="login__field">
                <select name="pets" id="pet-select" className="login__input2">
                  <option value="">Qualifications</option>
                  <option value="dog">High School Diploma</option>
                  <option value="cat">Associate's Degree</option>
                  <option value="hamster">Bachelor's Degree</option>
                  <option value="parrot">Master's Degree</option>
                  <option value="parrot">PhD or Doctorate</option>
                  <option value="spider">Teaching Certification</option>
                  <option value="parrot">Other</option>
                </select>
              </div>

              <div className="login__field">
                <select name="pets" id="pet-select" className="login__input2">
                  <option value="">Teaching Experince</option>
                  <option value="volvo">More than 1 year</option>
                  <option value="saab">1-3 years</option>
                  <option value="opel">3-5 years</option>
                  <option value="audi">5-10 years</option>
                  <option value="audi">More Than 10 years</option>
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
            <button
              className="signupbtn"
              onClick={() => {
                navigate("/Home");
              }}
            >
              Signup
            </button>
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

export default SignupTeacher;
