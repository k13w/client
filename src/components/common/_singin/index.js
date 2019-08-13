import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Container, Content, LoginForm, Error } from "./styles";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/api/users/singin", { email, password });
        login(response.data.token);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <>
      <Container>
        <Content >
          <LoginForm onSubmit={this.handleSignIn}>
            <label>E-mail:</label>
            <input
              type="email"
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="admin@admin.com"
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="password"
            />
            <Link to="/signup">Criar uma conta</Link>
            <button type="submit">Entrar</button>
            <Error>{this.state.error && <p>{this.state.error}</p>}</Error>
            <p>Design by Gilmar Silva, © All rights reserved</p>
          </LoginForm>
        </Content>
      </Container>
      </>
    );
  }
}

export default withRouter(SignIn);