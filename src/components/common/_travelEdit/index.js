import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container, LoginForm } from "./styles";

export default class EditTravel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            destino: '',
            saida: '',
            data_inicial: '',
            nome_requeridor: '',
            siape_requeridor: ''
        }
    }

    componentWillMount() {
        this.getTravelChange();
    }

    getTravelChange() {
        let travelId = this.props.match.params.id;
        api.get(`/api/controllers/travel/${travelId}`).then(res => {
        this.setState({
            id: res.data.travel._id,
            destino: res.data.travel.to,
            saida: res.data.travel.from,
            data_inicial: res.data.travel.date_start,
            nome_requeridor: res.data.travel.request_name,
            siape_requeridor: res.data.travel.request_siape,
            }, () => {
                console.log(this.state);
            })
        }).catch(err => console.log(err));
    }

    editTravel(dataChange) {
        api.put(`/api/controllers/travel/${this.state.id}`, dataChange).then(res => {
            this.props.history.push('/travels');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const dataChange = {
            to: this.refs.to.value,
            from: this.refs.from.value,
            date_start: this.refs.date_start.value,
            request_name: this.refs.request_name.value,
            request_siape: this.refs.request_siape.value
        }
        this.editTravel(dataChange);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <h3>Editar Viagem</h3>
                <Container>
                <LoginForm onSubmit={this.onSubmit.bind(this)}>
                        <label htmlFor="to">Destino</label>
                        <input type="text" name="to" ref="to" value={this.state.destino} onChange={e => this.setState({ destino: e.target.value })} />
                        <label htmlFor="from">Saída:</label>
                        <input type="text" name="from" ref="from" value={this.state.saida} onChange={e => this.setState({ saida: e.target.value })}/>
                        <label for="date_start">Data inicial</label>
                        <input type="text" class="datepicker" name="date_start" ref="date_start" value={this.state.data_inicial} onChange={e => this.setState({ data_inicial: e.target.value })} />
                        <label for="request_name">Nome do requeridor</label>
                        <input type="text" name="request_name" ref="request_name" value={this.state.nome_requeridor} onChange={e => this.setState({ nome_requeridor: e.target.value })} />
                        <label for="request_siape">SIAPE do requeridor</label>
                        <input type="text" name="request_siape" ref="request_siape" value={this.state.siape_requeridor} onChange={e => this.setState({ siape_requeridor: e.target.value })} />
                        <label for="vehicle">Veiculo</label>
                        <select class="browser-default">
                            <option value="1" value={this.state.vehicle}>{this.state.vehicle}</option>
                        </select>
                        <Link className="btn grey left" to="/travels">Voltar</Link>
                        <button class="btn right" type="submit">Salvar</button>
                </LoginForm>
                </Container>
            </div>
        )
    }
}