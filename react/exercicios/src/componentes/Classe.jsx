import React, {Component} from 'react'




export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome,
    }

    setTipo(e) {
       // this.props.tipo = e.target.value
       this.setState({tipo: e.target.value})
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() {
        // const {tipo, nome} = this.props
        const {tipo, nome} = this.state
        return (
            <div>
                <h1> {tipo} {nome}! </h1>
                <hr></hr>
                <input type='text' placeholder='tipo' value={tipo} onChange={e => this.setTipo(e)}></input>
                <input type='text' placeholder='nome' value={nome} onChange={e => this.setNome(e)}></input>
            </div>
        )
    }
}