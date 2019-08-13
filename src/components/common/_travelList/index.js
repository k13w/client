import React from 'react';
import api from '../../../services/api';
import ModelTravel from './modelTravel'

export default class Travels extends React.Component {
  state = {
    travels: []
  }

  componentDidMount() {
    api.get('/api/controllers/travels').then(res => {
      console.log(res.data.travels)
      this.setState({travels: res.data.travels});
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <>
      {this.state.travels.map(travel => {
        return (
          <ModelTravel key={travel._id} item={travel}/>
          );
        })
      }
      </>
    );
  }
}