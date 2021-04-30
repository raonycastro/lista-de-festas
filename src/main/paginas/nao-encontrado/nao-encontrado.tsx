import { Link } from 'react-router-dom';

const NaoEncontrado = () => (
    <div className="NaoEncontrado">
        <h1>Página Não Encontrada</h1>
        <Link to="/login">
            <p>redirecionar para tela de login</p>
        </Link>
    </div>
);

export default NaoEncontrado;