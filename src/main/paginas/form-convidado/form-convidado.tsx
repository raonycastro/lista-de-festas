import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../template/button/button';
import Content from '../../template/content/content';
import Input from '../../template/input/input';
import { BreadCrumbInterface, Convidado } from '../../util/interfaces';
import { match, RouteComponentInterface } from '../../util/interfaces/router-component.interface';
import { setConvidadoForm, getConvidadoForm } from '../../redux/form-convidado-action';
import { putConvidados, postConvidados } from '../../redux/convidados-action';
import { RotasEnum } from '../../util/enums/rotas.enum';
import { RotasTituloEnum } from '../../util/enums/rotas-titulo.enum';

interface MatchParams {
    idFesta: string;
    idConvidado?: string;
}

interface Props extends RouteComponentInterface<MatchParams> {
    editar: boolean;
    convidadoForm: Convidado;
    setConvidadoForm: Function;
    getConvidadoForm: Function;
    putConvidados: Function;
    postConvidados: Function;
}

class FormConvidado extends Component<Props> {
    
    id = (this.props.match as match<MatchParams>).params.idFesta;
    value = this.props.editar ? 'editar' : 'salvar';
    action = () => {
        const { convidadoForm } = this.props
        if (this.props.editar) {
            return this.props.putConvidados(convidadoForm);
        } else {
            return this.props.postConvidados({ ...convidadoForm, festa: Number(this.id) });
        }
    };
    breadCrumbs = new Array<BreadCrumbInterface>();
    get voltarLink() {
        return RotasEnum.EditarConvidados.replace(':id', this.id);
    }

    get disabled() {
        return !this.props.convidadoForm || !this.props.convidadoForm.nome;
    }

    componentDidMount() {
        if (this.props.match) {
            this.props.getConvidadoForm(Number(this.props.match.params.idConvidado));
        } else {
            this.props.getConvidadoForm(-1);
        }
        this.breadCrumbs = [
            { nome: RotasTituloEnum.Festas, link: RotasEnum.Festas },
            { nome: RotasTituloEnum.EditarFesta, link: RotasEnum.EditarFesta.replace(':id', this.id) },
            { nome: RotasTituloEnum.EditarConvidados, link: RotasEnum.EditarConvidados.replace(':id', this.id) }
        ];
    }

    render() {
        return (
            <Content
                breadCrumbs={this.breadCrumbs}
                titulo={this.props.editar ?  "Editar Convidado" : "Criar Convidado"}
                subtitulo="escolha o nome do convidado da festa"
                componente="FormConvidado">
                <form>
                    <div className="form-inputs">
                        <Input
                            id="nome"
                            name="nome"
                            type="text"
                            value={this.props.convidadoForm.nome}
                            onChange={(e: any) => this.props.setConvidadoForm({ ...this.props.convidadoForm, nome: e.target.value })} />
                    </div>
                    <div className="form-buttons">
                        <Button color="secundary" type="normal" link={this.voltarLink} value="cancelar" />
                        <Button disabled={this.disabled} color="warning" type="normal" link={this.voltarLink} value={this.value} action={this.action} />
                    </div>
                </form>
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => ({convidadoForm: state.convidadoForm})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({setConvidadoForm, getConvidadoForm, putConvidados, postConvidados}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FormConvidado);