import React, { Component } from "react";

import api from "../../../services/api";

import { Container, Panel, Header, Row } from './styles';

class NewTravel extends Component {
  state = {
    to: '',
    from: '',
    date_start: '',
    request_name: '',
    request_siape: '',
    vehicle: '',
    vehicles: [],
    error: ''
  };

  componentDidMount() {
    api.get('/api/controllers/vehicles').then(res => {
      console.log(res.data.vehicles)
      this.setState({vehicles: res.data.vehicles});
    }).catch(err => console.log(err));
  }


  handleNewTravel = async e => {
    e.preventDefault();

    const { to, from, date_start, request_name, request_siape, vehicle } = this.state;
     if (!to || !from || !date_start || !request_name || !request_siape || !vehicle ) {
      this.setState({ error: "Preencha todos os campos!" });
    } else {
      try {
          await api.post("/api/controllers/new_travel", {
          to, from, date_start, request_name, request_siape, vehicle
        });
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema ao adicionar nova viagem, verifique os dados."
        });
      }
    }
  };

  render() {
    return (
      <>
      <Container>
        <Panel>
        <div class="row">
    <form onSubmit={this.handleNewTravel} class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
            placeholder="Para onde está indo"
            type="text"
            class="validate"
            onChange={e => this.setState({ to: e.target.value })}
          />
        </div>

        <div class="input-field col s6">
          <input
            placeholder="De onde está vindo"
            type="text"
            class="validate"
            onChange={e => this.setState({ from: e.target.value })}
          />
        </div>

        <div class="input-field col s6">
          <input 
            placeholder="Nome do requeridor" 
            type="text" 
            class="validate" 
            onChange={e => this.setState({ request_name: e.target.value })}
          />
        </div>

        <div class="input-field col s6">
          <input 
            placeholder="SIAPE do requeridor" 
            type="text" 
            class="validate"
            onChange={e => this.setState({ request_siape: e.target.value })} 
          />
        </div>
        <div class="input-field col s6">
          <input 
            placeholder="Data Inicial" 
            type="text" 
            class="validate" 
            onChange={e => this.setState({ date_start: e.target.value })}
          />
        </div>

        <div class="input-field col s6">
          <select
            className="browser-default" 
            onChange={e => this.setState({ vehicle: e.target.value })}
          >
          <option 
            value="" 
            disabled selected
            >Escolha um veiculo
          </option>

          {this.state.vehicles.map(vehicle => {
            return (
              <option key={vehicle._id} value={vehicle._id}>
                {vehicle.model} - Placa {vehicle.license_plate}
              </option>
            );
          })
          }
          </select>
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
</>
    );
  }
}

export default NewTravel;
