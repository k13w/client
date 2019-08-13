import React from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

import { Container, Panel, Form } from "./styles";

import { Button } from 'react-bootstrap';


export default class TravelItemChanges extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        details: ''
      }
    }

  componentWillMount() {
    this.getTravel();
  }
  
  getTravel() {
    let travelId = this.props.match.params.id;
    api.get(`/api/controllers/travel/${travelId}`).then(res => {
      this.setState({details: res.data.travel});
      console.log(res.data.travel)
    }).catch(err => console.log(err));
  }

  onDelete() {
    let travelId = this.state.details._id;
    api.delete(`/api/controllers/travel/${travelId}`).then(res => {
      this.props.history.push("/travels");
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <>
      <Container>
        <Panel>
        <div class="row">
          <form class="col s12">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <Button>asa</Button>
          </form>
        </div>
        </Panel>
      </Container>
      </>
    )
  }
}