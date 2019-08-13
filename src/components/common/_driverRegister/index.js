import React, { Component } from "react";

import api from "../../../services/api";

import { Container, Panel } from './styles';

class NewDriver extends Component {
  state = {
    name: "",
    cpf: "",
    siape: ""
  };

  handleNewDriver = async e => {
    e.preventDefault();

    const { name, cpf, siape } = this.state;
    if (!name || !cpf || !siape) {
      this.setState({ error: "Preencha todos os campos!" });
    } else {
      try {
          await api.post("/api/controllers/new_driver", {
          name, cpf, siape
        });
        alert("Piloto Cadastrado com Sucesso!")
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema ao cadastrar um novo piloto"
        });
      }
    }
  };

  render() {
    return (
      <Container>
      <Panel>
        <div class="row">
        <form onSubmit={this.handleNewDriver} class="col s12">
          <div class="row">
          <div class="input-field col s6">
          <input
            placeholder="Nome do piloto"
            type="text"
            class="validate"
            onChange={e => this.setState({ name: e.target.value })}
          />
          </div>

          <div class="input-field col s6">
          <input
            placeholder="CPF do piloto"
            type="text"
            class="validate"
            onChange={e => this.setState({ cpf: e.target.value })}
          />
          </div>

          <div class="input-field col s6">
          <input 
            placeholder="SIAPE do piloto"
            type="text" 
            class="validate" 
            onChange={e => this.setState({ siape: e.target.value })}
          />
          </div>
      </div>
      <button type="submit">Cadastrar</button>

      <div class="error-submit">
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    </form>
    </div> 
    </Panel>
    </Container>
    );
  }
}

export default NewDriver;