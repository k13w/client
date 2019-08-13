import React from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

import { Container, ItemForm } from "./styles";

export default class DriverDetails extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        details: ''
      }
    }

  componentWillMount() {
    this.getDriver();
  }
  
  getDriver() {
    let driverId = this.props.match.params.id;
    api.get(`/api/controllers/driver/${driverId}`).then(res => {
      this.setState({details: res.data.driver});
      console.log(res.data.driver)
    }).catch(err => console.log(err));
  }

  onDelete() {
    let driverId = this.state.details._id;
    api.delete(`/api/controllers/driver/${driverId}`).then(res => {
      this.props.history.push("/dashboard");
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
              <input type="text" value={this.state.details.name} />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input type="text" value={this.state.details.cpf} />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input type="text" value={this.state.details.siape} />
            </div>
          </div>
          <Link className="btn grey left" to="/travels">Voltar</Link>
            <button onClick={this.onDelete.bind(this)} className="btn red">Deletar</button>
            <Link className="btn right" to={`/driver/edit/${this.state.details._id}`}>Editar</Link>
        </form>
        </div>
        </ItemForm>
      </Container>
      </>
    )
  }
}