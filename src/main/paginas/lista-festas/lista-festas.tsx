import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './lista-festas.css';
import { getFestas } from '../../redux/festas-action';
import Content from '../../template/content/content';
import Table from '../../template/table/table';
import { ButtonAction } from '../../util/interfaces/button-action.interface';
import { Festa } from '../../util/interfaces/festa.interface';
import { dateFormat } from '../../util/date-format';
import Button from '../../template/button/button';

interface Props {
    getFestas: Function;
    festas: Festa[];
}

class ListaFestas extends Component<Props> {

    header = ['festa', 'data', 'convidados', 'ação'];
    data: string[][] = [];
    colunmClass = ['festa', 'data', 'convidados', 'acao'];
    buttons: ButtonAction[][] = [];

    componentWillMount() {
        this.props.getFestas();
    }

    render() {
        this.buttons = this.props.festas.map(f => [
            {
                type: 'mini',
                color: 'secundary',
                icon: 'eye',
                link: '/visualizar-festa/:id'.replace(':id', String(f.id))
            },
            {
                type: 'mini',
                color: 'primary',
                icon: 'pen',
                link: '/editar-festa/:id'.replace(':id', String(f.id))
            },
            {
                type: 'mini',
                color: 'danger',
                icon: 'trash-alt',
                action: (id: number) => {
                    this.data.splice(id, 1);
                    this.data = [...this.data];
                }
            }
        ]);
        this.data = this.props.festas.map(f => [f.nome, dateFormat(f.data), String(f.totalConvidados)]);
        return (
            <Content
                titulo="Lista de Festas"
                subtitulo="escolha uma festa para editar ou visualizar"
                componente="ListaFestas">
                <div>
                    <Button
                        color="primary"
                        type="normal"
                        value="adicionar festa"
                        icon="plus"
                        link="/adicionar-festa" />
                    <Table
                        header={this.header}
                        data={this.data}
                        colunmClass={this.colunmClass}
                        buttons={this.buttons} />
                </div>
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => ({festas: state.festas});
const mapDispatchToProps = (dispatch: any) => bindActionCreators({getFestas}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListaFestas);
