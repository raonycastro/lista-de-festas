import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFestaForm, setFestaForm } from '../../redux/form-festa-action';
import { putFestas, postFestas } from '../../redux/festas-action';
import Button from '../../template/button/button';
import Content from '../../template/content/content';
import Input from '../../template/input/input';
import { BreadCrumbInterface, Festa } from '../../util/interfaces';
import { RouteComponentInterface } from '../../util/interfaces/router-component.interface';
import If from '../../condicao/if';
import { RotasTituloEnum } from '../../util/enums/rotas-titulo.enum';
import { RotasEnum } from '../../util/enums/rotas.enum';

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
    convidados: string = this.props.visualizar ? RotasTituloEnum.VisualizarConvidados : RotasTituloEnum.EditarConvidados;
    convidadosLink: string = this.props.visualizar ? RotasEnum.VisualizarConvidados : RotasEnum.EditarConvidados;
    breadCrumbs = new Array<BreadCrumbInterface>();
    action = () => {
        const { festaForm } = this.props
        if (this.props.editar) {
            return this.props.putFestas(festaForm);
        } else {
            return this.props.postFestas(festaForm);
        }
    };

    componentDidMount() {
        if (this.props.match) {
            this.props.getFestaForm(Number(this.props.match.params.id));
            this.convidadosLink = this.convidadosLink.replace(':id', this.props.match.params.id);
        } else {
            this.props.getFestaForm(-1);
        }
        this.breadCrumbs = [{ nome: RotasTituloEnum.Festas, link: RotasEnum.Festas }]
    }

    get disabled() {
        return !this.props.festaForm || !this.props.festaForm.nome || !this.props.festaForm.data;
    }

    render() {
        return (
            <Content
                breadCrumbs={this.breadCrumbs}
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
                        <Button color="secundary" type="normal" link={RotasEnum.Festas} value="cancelar" />
                        <If show={this.props.editar}>
                            <Button color="warning" type="normal" link={this.convidadosLink} value={this.convidados} />
                        </If>
                        <If show={!this.props.visualizar}>
                            <Button disabled={this.disabled} color="primary" type="normal" action={this.action} link={RotasEnum.Festas} value={this.value} />
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