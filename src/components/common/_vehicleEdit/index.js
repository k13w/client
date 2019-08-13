import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container, LoginForm } from "./styles";

export default class EditVehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            marca: '',
            modelo: '',
            ano: '',
            placa: '',
            renavam: ''
        }
    }

    componentWillMount() {
        this.getVehicleChange();
    }

    getVehicleChange() {
        let vehicleId = this.props.match.params.id;
        api.get(`/api/controllers/vehicle/${vehicleId}`).then(res => {
        this.setState({
            id: res.data.vehicle._id,
            marca: res.data.vehicle.brand,
            modelo: res.data.vehicle.model,
            ano: res.data.vehicle.year,
            placa: res.data.vehicle.license_plate,
            renavam: res.data.vehicle.renavam_code,
            }, () => {
                console.log(this.state);
            })
        }).catch(err => console.log(err));
    }

    editVehicle(dataChange) {
        api.put(`/api/controllers/vehicle/${this.state.id}`, dataChange).then(res => {
            this.props.history.push('/vehicles');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const dataChange = {
            brand: this.refs.brand.value,
            model: this.refs.model.value,
            year: this.refs.year.value,
            license_plate: this.refs.license_plate.value,
            renavam_code: this.refs.renavam_code.value,
        }
        this.editVehicle(dataChange);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <h3>Editar Piloto</h3>
                <Container>
                <LoginForm onSubmit={this.onSubmit.bind(this)}>
                        <label htmlFor="name">Marca:</label>
                        <input type="text" name="brand" ref="brand" value={this.state.marca} onChange={e => this.setState({ marca: e.target.value })} />
                        <label htmlFor="cpf">Modelo:</label>
                        <input type="text" name="model" ref="model" value={this.state.modelo} onChange={e => this.setState({ modelo: e.target.value })}/>
                        <label htmlFor="siape">Ano:</label>
                        <input type="text" name="year" ref="year" value={this.state.ano} onChange={e => this.setState({ ano: e.target.value })} />
                        <label htmlFor="siape">Placa:</label>
                        <input type="text" name="license_plate" ref="license_plate" value={this.state.placa} onChange={e => this.setState({ placa: e.target.value })} />
                        <label htmlFor="siape">Renavam:</label>
                        <input type="text" name="renavam_code" ref="renavam_code" value={this.state.renavam} onChange={e => this.setState({ renavam: e.target.value })} />
                        <Link className="btn grey left" to="/drivers">Voltar</Link>
                        <button class="btn right" type="submit">Salvar</button>
                </LoginForm>
                </Container>
            </div>
        )
    }
}