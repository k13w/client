import React from 'react';
import api from '../../../services/api';
import VehicleModel from './vehicle_model'

export default class Travels extends React.Component {
  state = {
    vehicles: []
  }

  componentDidMount() {
    api.get('/api/controllers/vehicles').then(res => {
      console.log(res.data.vehicles)
      this.setState({vehicles: res.data.vehicles});
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <>
      {this.state.vehicles.map(vehicle => {
        return (
          <VehicleModel key={vehicle._id} item={vehicle}/>
          );
        })
      }
      </>
    );
  }
}
