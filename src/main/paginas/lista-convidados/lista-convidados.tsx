import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import If from '../../condicao/if';
import { getConvidados, deleteConvidados } from '../../redux/convidados-action';
import Button from '../../template/button/button';
import Content from '../../template/content/content';
import Modal from '../../template/modal/modal';
import Table from '../../template/table/table';
import { RotasParamsEnum } from '../../util/enums/rotas-params.enum';
import { RotasTituloEnum } from '../../util/enums/rotas-titulo.enum';
import { RotasEnum } from '../../util/enums/rotas.enum';
import { BreadCrumbInterface, ButtonAction, Convidado } from '../../util/interfaces';
import { ModalStateInterface } from '../../util/interfaces/modal-state.interface';
import { match, RouteComponentInterface } from '../../util/interfaces/router-component.interface';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentInterface<MatchParams> {
    editar: boolean;
    getConvidados: Function;
    deleteConvidados: Function;
    convidados: Convidado[]
}

class ListaConvidados extends Component<Props> {

    header = this.props.editar ? ['nome', 'ação'] : ['nome'];
    data: string[][] = [];
    colunmClass = this.props.editar ? ['nome', 'acao'] : ['nome'];
    buttons: ButtonAction[][] = [];
    breadCrumbs = new Array<BreadCrumbInterface>();
    customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    modalIsOpen = false;
    modalConvidado: Convidado | null = null;
    state: ModalStateInterface;
    
    constructor(props: Props) {
        super(props);
        this.state = {
          showModal: false
        };        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        const id = (this.props.match as match<MatchParams>).params.id;
        this.props.getConvidados(Number(id));
    }
  
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    deleteConvidado(convidado: Convidado) {
        const id = (this.props.match as match<MatchParams>).params.id;
        this.props.deleteConvidados(convidado);
        this.props.getConvidados(Number(id));
        this.handleCloseModal();
    }

    render () {
        const id = (this.props.match as match<MatchParams>).params.id;
        if (this.props.editar) {
            this.buttons = this.props.convidados.map(c => [
                {
                    type: 'mini',
                    color: 'primary',
                    icon: 'pen',
                    link: RotasEnum.EditarConvidado
                        .replace(RotasParamsEnum.IdConvidado, String(c.id))
                        .replace(RotasParamsEnum.IdFesta, id)
                },
                {
                    type: 'mini',
                    color: 'danger',
                    icon: 'trash-alt',
                    action: () => {
                        this.modalConvidado = c;
                        this.handleOpenModal();
                    }
                }
            ]);
            this.breadCrumbs = [
                { nome: RotasTituloEnum.Festas , link: RotasEnum.Festas },
                { nome: RotasTituloEnum.EditarFesta, link: RotasEnum.EditarFesta.replace(':id', id) }
            ];
        } else {
            this.breadCrumbs = [
                { nome: RotasTituloEnum.Festas , link: RotasEnum.Festas },
                { nome: RotasTituloEnum.VisualizarFesta, link: RotasEnum.VisualizarFesta.replace(':id', id) }
            ]
        }
        this.data = this.props.convidados.map(f => [f.nome]);
        return (
            <Content
                breadCrumbs={this.breadCrumbs}
                titulo="Lista de Convidados"
                subtitulo="edite ou visualize os convidados da festa"
                componente="ListaConvidados">
                <div>
                    <If show={this.props.editar}>
                        <Button
                            color="primary"
                            type="normal"
                            value="adicionar convidado"
                            icon="plus"
                            link={RotasEnum.AdicionarConvidado.replace(RotasParamsEnum.IdFesta, id)} />
                    </If>
                    <Table
                        header={this.header}
                        data={this.data}
                        colunmClass={this.colunmClass}
                        buttons={this.buttons} />
                    <ReactModal
                        isOpen={this.state.showModal}
                        style={this.customStyles}
                    >
                        <Modal
                            titulo={`Deseja excluir o convidado ${this.modalConvidado?.nome}?`}
                            botaoCancel={{type: "normal", color: "secundary", value: "cancelar", action: this.handleCloseModal}}
                            botaoConfirm={{type: "normal", color: "danger", value: "excluir", action: () => this.deleteConvidado(this.modalConvidado as Convidado)}} />
                    </ReactModal>
                </div>
            </Content>
        )
    }
}

const mapStateToProps = (state: any) => ({convidados: state.convidados})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({getConvidados, deleteConvidados}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListaConvidados);