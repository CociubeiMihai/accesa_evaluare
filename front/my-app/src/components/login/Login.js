import React, { useState } from "react";
import "../../styles/Login.style.css";
import background from "../../img/img1.jpg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authorize } from "../../service/LoginService";

const Bacground = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");

  const handleSubmit = (e) => {
    if(email != '' && parola != ""){
    authorize(email,parola).then((res) => {
      console.log(res.data)
      if(res.data === "Nu s-a gasit")
        alert("Gresit");
      else{
        localStorage.setItem('User', JSON.stringify(res.data));
        navigate("/quests");
      }

    })}
  };

  return (
      <div style={{ width: "100%", height: "100vh" }} className="login">
        <img alt="img" src={background} />
          <div className="center">
            <h1>Login</h1>
            <form>
              <div className="txt_field">
                <input
                  className="fill"
                  type="text"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span></span>
                <label>Email</label>
              </div>

              <div className="txt_field">
                <input
                  className="fill"
                  type="password"
                  name="password"
                  value={parola}
                  required
                  onChange={(e) => setParola(e.target.value)}
                />
                <span></span>
                <label>Password</label>
              </div>
              <div className="pass">Forgot Password?</div>
              <input type="button" value="Login" onClick={handleSubmit}></input>
              <div className="signup_link">
                Not a member?
                <a href="/register">Singup</a>
              </div>
            </form>
          </div>
      </div>
  );
}

export default Login;
