import React from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

import Donut from './Chart';

import { Container, Header, Row } from './styles';

export default class ModelTravel extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            travels: [],
            item: props.item
    }
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
      <Container>
        <Row>
        <table>
        <thead>
          <tr>
              <th>Destino</th>
              <th>Saída</th>
              <th>Data</th>
              <th>Status</th>
              <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{this.state.item.to}</td>
            <td>{this.state.item.from}</td>
            <td>{this.state.item.date_start}</td>
            <td><span class="new badge" data-badge-caption={this.state.item.from}></span></td>
            <Link to={`/travel/${this.state.item._id}`}><button>Edit</button></Link>
          </tr>
        </tbody>
      </table>
      </Row>
      </Container>
      </>
    )
  }
}