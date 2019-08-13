import React from 'react';
import { Link } from 'react-router-dom';

export default class ModelDriver extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                item:props.item
        }
    }

    render() {
        return (
        <>
        <div class="row">
          <div class="content">
            <div class="card">
              <div class="card-header">
              <h6 class="text-card-header">Pilotos</h6>
              <div class="table-over">
              <table>
                <thead>
                  <tr>
                      <th>Nome:</th>
                      <th>CPF:</th>
                      <th>SIAPE:</th>
                  </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{this.state.item.name}</td>
                        <td>{this.state.item.cpf}</td>
                        <td>{this.state.item.siape}</td>
                    <td>{this.state.item.request_name}</td>
                    <Link to={`/driver/${this.state.item._id}`}>
                      <button class="btn-change-color btn">Configurar</button>
                    </Link>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
            </div>
            </div>
          </div>
          
        </>
        )
    }
}