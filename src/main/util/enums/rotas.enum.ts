export enum RotasEnum {
    Festas = '/festas',
    AdicionarFesta = '/adicionar-festa',
    VisualizarFesta = '/visualizar-festa/:id',
    EditarFesta = '/editar-festa/:id',
    VisualizarConvidados = '/:id/visualizar-convidados',
    EditarConvidados = '/:id/editar-convidados',
    AdicionarConvidado= '/:idFesta/adicionar-convidado',
    EditarConvidado= '/:idFesta/editar-convidado/:idConvidado',
    Login = '/login',
    NaoEncontrado = '/nao-encontrado'
}
  