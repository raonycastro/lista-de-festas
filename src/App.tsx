import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import ListaFestas from './main/paginas/lista-festas/lista-festas';
import Login from './main/paginas/login/login';
import ListaConvidados from './main/paginas/lista-convidados/lista-convidados';
import NaoEncontrado from './main/paginas/nao-encontrado/nao-encontrado';
import FormFesta from './main/paginas/form-festa/form-festa';
import FormConvidado from './main/paginas/form-convidado/form-convidado';
import { RotasEnum } from './main/util/enums/rotas.enum';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={RotasEnum.Festas}>
            <ListaFestas />
          </Route>
          <Route path={RotasEnum.AdicionarFesta}>
            <FormFesta editar={false} visualizar={false} />
          </Route>
          <Route path={RotasEnum.EditarFesta}
            render={(props) => <FormFesta {...props} editar={true} visualizar={false} />}>
          </Route>
          <Route path={RotasEnum.VisualizarFesta}
            render={(props) => <FormFesta {...props} editar={true} visualizar={true} />}>
          </Route> 
          <Route path={RotasEnum.EditarConvidados}
            render={(props) => <ListaConvidados {...props} editar={true} />}>
          </Route> 
          <Route path={RotasEnum.VisualizarConvidados}
            render={(props) => <ListaConvidados {...props} editar={false} />}>
          </Route> 
          <Route path={RotasEnum.AdicionarConvidado}
            render={(props) => <FormConvidado {...props} editar={false} />}>
          </Route> 
          <Route path={RotasEnum.EditarConvidado}
            render={(props) => <FormConvidado {...props} editar={true} />}>
          </Route>
          <Route path={RotasEnum.Login}>
            <Login />
          </Route> 
          <Route path={RotasEnum.NaoEncontrado}>
            <NaoEncontrado />
          </Route> 
          <Redirect exact from="/" to={RotasEnum.Festas}></Redirect>
          <Redirect from="*" to={RotasEnum.NaoEncontrado}></Redirect>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
