import React, { Component } from 'react';

import api from '../services/api';
import Charts from '../components/UI/Charts'
import Donut from '../components/UI/Charts/Donut'

export class Home extends Component {

  state = {
    travels: [],
    drivers: [],
    vehicles: []
  }
  
  componentDidMount() {
    api.get('/api/controllers/travels').then(res => {
      this.setState({travels: res.data.travels});
      console.log(res.data.travels)
    }).catch(err => console.log(err));
    api.get('/api/controllers/drivers').then(res => {
      this.setState({drivers: res.data.drivers});
      console.log(res.data.drivers)
    }).catch(err => console.log(err));
    api.get('/api/controllers/vehicles').then(res => {
      this.setState({vehicles: res.data.vehicles});
      console.log(res.data.vehicles)
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className='home center'>
          {!this.props.children ? (
          <>
          <h3 className='accent welcome'>Sistema Controle de Frota</h3>
          <div className="row">
            <div className="col s12">
              <div className="card-panel teal">
                  <span className="white-text">Bem vindo ao sistema de frota
                  </span>
              </div>
            </div>
            <div className="col s5">
              <div className="card-panel grey">
              <div className="progress">
              <div className="determinate" style={{width: "70%"}}></div>
            </div>
            <div className="progress">
              <span>Viagens:</span>
              <div className="determinate" style={{width: "50%"}}></div>
            </div>
            <div className="progress">
              <div className="determinate" style={{width: "85%"}}></div>
            </div>
            <div className="progress">
              <div className="determinate" style={{width: "30%"}}></div>
            </div>
          </div>
        </div>
            

        <div className="col s7">
        <div className="card-panel grey">
              <span className="white-text">Bem Vindo ao sistema de frota pré-release 0.1.
              Aqui você poderá cadastrar uma nova viajem, veículos e pilotos.
              </span>
          </div>
        </div>
      </div>
<div className="row">
<div className="col s12 m12">

</div>
</div>
        <div className="row">
            <div className="col s8 m4">
                 <div className="card-panel-statics deep-purple lighten-1">
                      <>
                      <span className="white-text">{this.state.travels.length}<br/></span>
                      <span className="white-text">Viagens</span>
                      </>
             </div>
             
         </div>
         <div className="col s8 m4">
            <div className="card-panel-statics blue lighten-1">
            <span className="white-text">{this.state.drivers.length}<br/></span>
                <span className="white-text">Pilotos</span>
             </div>
             
         </div>
         <div className="col s8 m4">
                 <div className="card-panel-statics pink lighten-1">
                 <span className="white-text">{this.state.vehicles.length}<br/></span>
                 <span className="white-text">Veículos</span>
             </div>
             
         </div>
    </div>
    <Charts />
    </>
        ) : null}
        <div>{this.props.children}</div>
        
        </div>
    );
  }
}
export default Home;
