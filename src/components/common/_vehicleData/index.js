import React from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

import { Container, ItemForm } from "./styles";

export default class VehicleDetails extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        details: ''
      }
    }

  componentWillMount() {
    this.getVehicle();
  }
  
  getVehicle() {
    let vehicleId = this.props.match.params.id;
    api.get(`/api/controllers/vehicle/${vehicleId}`).then(res => {
      this.setState({details: res.data.vehicle});
      console.log(res.data.vehicle)
    }).catch(err => console.log(err));
  }

  onDelete() {
    let vehicleId = this.state.details._id;
    api.delete(`/api/controllers/vehicle/${vehicleId}`).then(res => {
      this.props.history.push("/vehicles");
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <>
      <Container>
        <ItemForm>
        <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input type="text" value={this.state.details.brand} />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input type="text" value={this.state.details.model} />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input type="text" value={this.state.details.year} />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input type="text" value={this.state.details.license_plate} />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input type="text" value={this.state.details.renavam_code} />
            </div>
          </div>
          <Link className="btn grey left" to="/vehicles">Voltar</Link>
            <button onClick={this.onDelete.bind(this)} className="btn red">Deletar</button>
            <Link className="btn right" to={`/vehicle/edit/${this.state.details._id}`}>Editar</Link>
        </form>
        </div>
        </ItemForm>
      </Container>
      </>
    )
  }
}