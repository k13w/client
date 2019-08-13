import React from 'react';
import api from '../../../services/api';
import ModelDriver from './modeldriver'

export default class Drivers extends React.Component {
  state = {
    drivers: []
  }

  componentDidMount() {
    api.get('/api/controllers/drivers').then(res => {
      this.setState({drivers: res.data.drivers});
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <>
      {this.state.drivers.map(driver => {
        return (
          <ModelDriver key={driver._id} item={driver}/>
            );
        })
        }
      </>
    );
  }
}