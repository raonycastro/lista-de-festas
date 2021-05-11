import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './lista-festas.css';
import { getFestas, deleteFestas } from '../../redux/festas-action';
import { deleteConvidadosFesta } from '../../redux/convidados-action';
import Content from '../../template/content/content';
import Table from '../../template/table/table';
import { ButtonAction } from '../../util/interfaces/button-action.interface';
import { Festa } from '../../util/interfaces/festa.interface';
import { dateFormat } from '../../util/date-format';
import Button from '../../template/button/button';
import { BreadCrumbInterface } from '../../util/interfaces';
import { RotasParamsEnum } from '../../util/enums/rotas-params.enum';
import { RotasEnum } from '../../util/enums/rotas.enum';
import ReactModal from 'react-modal';
import { ModalStateInterface } from '../../util/interfaces/modal-state.interface';
import Modal from '../../template/modal/modal';

interface Props {
    getFestas: Function;
    deleteFestas: Function;
    deleteConvidadosFesta: Function;
    festas: Festa[];
}

class ListaFestas extends Component<Props> {

    header = ['festa', 'data', 'convidados', 'ação'];
    data: string[][] = [];
    colunmClass = ['festa', 'data', 'convidados', 'acao'];
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
    modalFesta: Festa | null = null;
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
        this.props.getFestas();
    }
  
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    deleteFesta(f: Festa) {
        this.props.deleteConvidadosFesta(f);
        this.props.deleteFestas(f);
        this.handleCloseModal();
    }

    render() {
        this.buttons = this.props.festas.map(f => [
            {
                type: 'mini',
                color: 'secundary',
                icon: 'eye',
                link: RotasEnum.VisualizarFesta.replace(RotasParamsEnum.Id, String(f.id))
            },
            {
                type: 'mini',
                color: 'primary',
                icon: 'pen',
                link: RotasEnum.EditarFesta.replace(RotasParamsEnum.Id, String(f.id))
            },
            {
                type: 'mini',
                color: 'danger',
                icon: 'trash-alt',
                action: () => {
                    this.modalFesta = f;
                    this.handleOpenModal();
                }
            }
        ]);
        this.data = this.props.festas.map(f => [f.nome, dateFormat(f.data), String(f.totalConvidados)]);
        return (
            <Content
                breadCrumbs={this.breadCrumbs}
                titulo="Lista de Festas"
                subtitulo="escolha uma festa para editar ou visualizar"
                componente="ListaFestas">
                <div>
                    <Button
                        color="primary"
                        type="normal"
                        value="adicionar festa"
                        icon="plus"
                        link={RotasEnum.AdicionarFesta} />
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
                            titulo={`Deseja excluir a festa ${this.modalFesta?.nome}?`}
                            botaoCancel={{type: "normal", color: "secundary", value: "cancelar", action: this.handleCloseModal}}
                            botaoConfirm={{type: "normal", color: "danger", value: "excluir", action: () => this.deleteFesta(this.modalFesta as Festa)}} />
                    </ReactModal>
                </div>
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => ({festas: state.festas});
const mapDispatchToProps = (dispatch: any) => bindActionCreators({getFestas, deleteFestas, deleteConvidadosFesta}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListaFestas);
