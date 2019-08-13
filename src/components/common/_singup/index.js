import React, { Component } from "react";
import { Link, withRouter  } from "react-router-dom";

import api from "../../../services/api";

import { Container, Content, LoginForm, Error } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    cpf: "",
    error: ""
  };


  handleSignUp = async e => {
    e.preventDefault();

    const { username, email, password, cpf } = this.state;
    if (!username || !email || !password || !cpf) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    }
    else if (cpf.length !== 14 ) {
      this.setState({ error: "Preencha um CPF válido" });
    } else {
      try {
        await api.post("/api/users/singup", { username, email, password, cpf });
        alert('Cadastro realizado com sucesso!');
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Content>
        <LoginForm onSubmit={this.handleSignUp}>
          <label>Usuário:</label>
          <input
            type="text"
            maxLength='12'
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <label>E-mail:</label>
          <input
            type="email"
            maxLength='50'
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <label>CPF:</label>
          <input
            type="text"
            placeholder="CPF"
            maxLength='14'
            onChange={e => this.setState({ cpf: e.target.value})}
          />
          <Link to="/">Fazer login</Link>
          <button type="submit" >Cadastrar</button>
          <Error>{this.state.error && <p>{this.state.error}</p>}</Error>
        </LoginForm>
        </Content>
      </Container>
    );
  }
}


export default withRouter(SignUp);