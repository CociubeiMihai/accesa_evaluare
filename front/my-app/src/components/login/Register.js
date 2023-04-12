import React, { useState } from "react";
import "../../styles/Login.style.css";
import background from "../../img/img1.jpg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../service/LoginService";

const Bacground = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");

  const handleSubmit = (e) => {
    if(email != '' && parola != ""){
    register(email,parola).then((res) => {
      console.log(res.data)
      if(res.data === "Nu s-a gasit")
        alert("Gresit");
      else{
        navigate("/");
      }
    })}
  };

  return (
    <Bacground style={{ backgroundImage: `url(${background})` }}>
      <div style={{ width: "100vh", height: "100vh" }}>
          <div className="center">
            <h1>Register</h1>
            <form >
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
              <input type="button" value="Register" onClick={handleSubmit}></input>
            </form>
          </div>
      </div>
    </Bacground>
  );
}

export default Register;
