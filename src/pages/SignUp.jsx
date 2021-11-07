import { Helmet } from "react-helmet";
import { useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Layout from "../components/Layout";
import Input from "../components/form/Input";
import Form from "../components/form";

import { signUp as signUpService } from "../services/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpService({ email, username, password }).then((res) => {
      alert(res.text);
    });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Register - MemesGenerator</title>
      </Helmet>

      <Layout>
        <Form handleSubmit={handleSubmit} title="Register">
          <label>
            Email
            <Input type="text" value={email} onChange={handleChangeEmail} />
          </label>

          <label>
            Username
            <Input
              type="text"
              value={username}
              onChange={handleChangeUsername}
            />
          </label>

          <label>
            Password
            <Input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <Button>Login</Button>
        </Form>
      </Layout>
    </>
  );
}

export default SignUp;