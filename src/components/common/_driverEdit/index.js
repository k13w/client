import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container, LoginForm } from "./styles";

export default class EditDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            cpf: '',
            siape: ''
        }
    }

    componentWillMount() {
        this.getDriverChange();
    }

    getDriverChange() {
        let driverId = this.props.match.params.id;
        api.get(`/api/controllers/driver/${driverId}`).then(res => {
        this.setState({
            id: res.data.driver._id,
            nome: res.data.driver.name,
            cpf: res.data.driver.cpf,
            siape: res.data.driver.siape,
            }, () => {
                console.log(this.state);
            })
        }).catch(err => console.log(err));
    }

    editDriver(dataChange) {
        api.put(`/api/controllers/driver/${this.state.id}`, dataChange).then(res => {
            this.props.history.push('/drivers');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const dataChange = {
            name: this.refs.name.value,
            cpf: this.refs.cpf.value,
            siape: this.refs.siape.value,
        }
        this.editDriver(dataChange);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <h3>Editar Piloto</h3>
                <Container>
                <LoginForm onSubmit={this.onSubmit.bind(this)}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" ref="name" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} />
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" name="cpf" ref="cpf" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })}/>
                        <label htmlFor="siape">SIAPE:</label>
                        <input type="text" name="siape" ref="siape" value={this.state.siape} onChange={e => this.setState({ siape: e.target.value })} />
                        <Link className="btn grey left" to="/drivers">Voltar</Link>
                        <button class="btn right" type="submit">Salvar</button>
                </LoginForm>
                </Container>
            </div>
        )
    }
}