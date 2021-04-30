import React, { Component } from 'react';
import Content from '../../template/content/content';

class ListaConvidados extends Component {
    render () {
        return (
            <Content
                titulo="Lista de Convidados"
                subtitulo="edite ou visualize os convidados da festa"
                componente="ListaConvidados">
                <div></div>
            </Content>
        )
    }
}

export default ListaConvidados;