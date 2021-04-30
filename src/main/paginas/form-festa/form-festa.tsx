import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFestaForm, setFestaForm } from '../../redux/form-festa-action';
import { putFestas, postFestas } from '../../redux/festas-action';
import Button from '../../template/button/button';
import Content from '../../template/content/content';
import Input from '../../template/input/input';
import { Festa } from '../../util/interfaces';
import { RouteComponentInterface } from '../../util/interfaces/router-component.interface';
import If from '../../condicao/if';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentInterface<MatchParams> {
    visualizar: boolean;
    editar: boolean;
    festaForm: Festa;
    setFestaForm: Function;
    getFestaForm: Function;
    putFestas: Function;
    postFestas: Function;
}

class FormFesta extends Component<Props> {
    
    value = this.props.editar ? 'editar' : 'salvar';
    action = () => {
        const { festaForm } = this.props
        if (this.props.editar) {
            return this.props.putFestas(festaForm);
        } else {
            return this.props.postFestas(festaForm);
        }
    };

    componentWillMount() {
        if (this.props.match) {
            this.props.getFestaForm(Number(this.props.match.params.id));
        } else {
            this.props.getFestaForm(-1);
        }
    }

    render() {
        return (
            <Content
                titulo={this.props.editar ? this.props.visualizar ? "Visualizar Festa" : "Editar Festa" : "Criar Festa"}
                subtitulo="escolha o nome e a data da festa"
                componente="FormFesta">
                <form>
                    <div className="form-inputs">
                        <Input
                            id="nome"
                            name="nome"
                            type="text"
                            value={this.props.festaForm.nome}
                            readOnly={this.props.visualizar}
                            onChange={(e: any) => this.props.setFestaForm({ ...this.props.festaForm, nome: e.target.value })} />
                        <Input
                            id="data"
                            name="data"
                            type="date"
                            value={this.props.festaForm.data}
                            readOnly={this.props.visualizar}
                            onChange={(e: any) => this.props.setFestaForm({ ...this.props.festaForm, data: e.target.value })} />
                    </div>
                    <div className="form-buttons">
                        <Button color="secundary" type="normal" link="/festas" value="cancelar" />
                        <If show={!this.props.visualizar}>
                            <Button color="primary" type="normal" action={this.action} link="/festas" value={this.value} />
                        </If>
                    </div>
                </form>
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => ({festaForm: state.festaForm})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({setFestaForm, getFestaForm, putFestas, postFestas}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FormFesta);