import { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import { BiLogIn } from "react-icons/bi";

import Button from "../components/Button";
import Layout from "../components/Layout";
import Input from "../components/form/Input";
import Form from "../components/form";

import { signIn as signInService } from "../services/auth";
import useUser from "../hooks/useUser";

function SignIn() {
  const history = useHistory();
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInService({ email, password }).then((res) => {
      console.log(res);

      if (res.token) {
        login(res);
        history.push("/");
      }
    });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Login - MemesGenerator</title>
      </Helmet>

      <Layout>
        <Form handleSubmit={handleSubmit} title="Login">
          <label>
            Email
            <Input type="text" value={email} onChange={handleChangeEmail} />
          </label>

          <label>
            Password
            <Input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <Button icon={<BiLogIn />}>Login</Button>
        </Form>
      </Layout>
    </>
  );
}

export default SignIn;
