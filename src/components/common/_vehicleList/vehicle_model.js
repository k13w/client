import React from 'react';
import { Link } from 'react-router-dom';

export default class VehicleModel extends React.Component {

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
              <h6 class="text-card-header">Veículos</h6>
              <div class="table-over">
              <table>
                <thead>
                  <tr>
                      <th>Marca</th>
                      <th>Modelo</th>
                      <th>Placa</th>
                      <th>Renavam</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{this.state.item.brand}</td>
                    <td>{this.state.item.model}r</td>
                    <td>{this.state.item.license_plate}</td>
                    <td>{this.state.item.renavam_code}r</td>
                    <Link to={`/vehicle/${this.state.item._id}`}>
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