//create login component

import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");

  const loginAPIData = () => {
    axios
      .get(`https://localhost:7101/api/LoginCredentials`)
      .then((response) => {
        let data = response.data;
        let user = data.filter((item) => {
          return Username === item.username && Password === item.password;
        });
        if (user.length) {
          navigate("/render/home");
        } else {
          alert("Invalid Credentials");
        }
      });
  };

  return (
    <div className="login">
      <Form size="large">
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="username"
            value={Username}
            onChange={(e) => setusername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="password"
            value={Password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
        </Form.Field>
        <Button color="green" onClick={loginAPIData} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
