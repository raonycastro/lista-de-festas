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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/festas">
            <ListaFestas />
          </Route>
          <Route path="/adicionar-festa">
            <FormFesta editar={false} visualizar={false} />
          </Route>
          <Route path="/editar-festa/:id"
            render={(props) => <FormFesta {...props} editar={true} visualizar={false} />}>
          </Route>
          <Route path="/visualizar-festa/:id"
            render={(props) => <FormFesta {...props} editar={true} visualizar={true}/>}>
          </Route>
          <Route path="/:id/convidados">
            <ListaConvidados />
          </Route> 
          <Route path="/login">
            <Login />
          </Route> 
          <Route path="/nao-encontrado">
            <NaoEncontrado />
          </Route> 
          <Redirect exact from="/" to="/festas"></Redirect>
          <Redirect from="*" to="/nao-encontrado"></Redirect>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
