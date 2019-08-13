import React, { Component } from "react";

import api from "../../../services/api";

import { Container, Panel } from './styles';

export default class NewVehicle extends Component {
  state = {
    brand: "",
    model: "",
    year: "",
    license_plate: "",
    renavam_code: "",
  };

  handleNewVehicle = async e => {
    e.preventDefault();

    const { brand, model, year, license_plate, renavam_code } = this.state;
    if (!brand || !model || !year || !license_plate || !renavam_code) {
      this.setState({ error: "Preencha todos os campos!" });
    } else {
      try {
          await api.post("/api/controllers/new_vehicle", {
          brand, model, year, license_plate, renavam_code
        });
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema ao cadastrar um novo veículo"
        });
      }
    }
  };

  
  render() {
    return (
      <Container>
      <Panel>
        <div class="row">
        <form onSubmit={this.handleNewVehicle} class="col s12">
          <div class="row">
          <div class="input-field col s6">
          <input
            placeholder="Marca do veículo"
            type="text"
            class="validate"
            onChange={e => this.setState({ brand: e.target.value })}
          />
          </div>

          <div class="input-field col s6">
          <input
            placeholder="Modelo do veículo"
            type="text"
            class="validate"
            onChange={e => this.setState({ model: e.target.value })}
          />
          </div>

          <div class="input-field col s6">
          <input 
            placeholder="Ano do veículo"
            type="text" 
            class="validate" 
            onChange={e => this.setState({ year: e.target.value })}
          />
          </div>

          <div class="input-field col s6">
          <input 
            placeholder="Placa do veículo"
            type="text" 
            class="validate"
            onChange={e => this.setState({ license_plate: e.target.value })}
          />
          </div>

          <div class="input-field col s6">
          <input 
            placeholder="Código Renavam"
            type="text" 
            class="validate" 
            onChange={e => this.setState({ renavam_code: e.target.value })}
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