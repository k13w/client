import React, { Component } from 'react';
import NavBar from '../../components/UI/navbar/navbar';
import Home from '../../layouts/home';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Home>{this.props.children}</Home>
      </>
    );
  }
}
export default Dashboard;
