import React, { Component } from 'react'
import { Collapsible, CollapsibleItem, SideNav } from 'react-materialize'
import { Link, NavLink } from 'react-router-dom'

import { logout } from '../../../services/auth';

export default class Drawer extends Component {


    handleLogout = async e => {
        await logout();

        window.location.href = '/';
    }

    render() {

        return (
            <SideNav>
                <br />
                <img class="logo" src="imgs/logo_etec.png" width="200px"/>
                <br />
                <br />
                <Collapsible>
                    <Link to="/dashboard">
                        <CollapsibleItem header="Inicio" icon="dashboard"/>
                    </Link>
                    <CollapsibleItem header="Viagens" icon="local_shipping">
                        <NavLink to={'/new_travel'}> Cadastrar nova viagem </NavLink><br/>
                        <NavLink to={'/travels'}> Listar Viagens </NavLink>
                    </CollapsibleItem>

                    <CollapsibleItem header="Pilotos" icon="airline_seat_recline_normal">
                        <NavLink to={'/new_driver'}> Cadastrar novo Piloto </NavLink><br/>
                        <NavLink to={'/drivers'}> Listar Pilotos </NavLink>
                    </CollapsibleItem>

                    <CollapsibleItem header="Veiculos" icon="directions_car">
                        <NavLink to={'/new_vehicle'}> Cadastrar novo Veículo </NavLink><br/>
                        <NavLink to={'/vehicles'}> Listar Veículos </NavLink>
                    </CollapsibleItem>

                    <Link to="/settings"><CollapsibleItem header="Configurações" icon="build" /></Link>

                    <CollapsibleItem header="Sair" onClick={this.handleLogout} icon="exit_to_app" />
                </Collapsible>
                <hr />
            </SideNav>
        )
    }
}