import './content.css';
import Header from '../header/header';
import Footer from '../footer/footer';

interface Props {
    titulo: string;
    subtitulo: string;
    componente: string;
    children: JSX.Element;
}

const Content = (props: Props) => (
    <article className="Content">
        <div className="titulo-section">
            <Header
                titulo={props?.titulo}
                subtitulo={props?.subtitulo} />
            <section className={`Content-Section ${props?.componente}`}>{props?.children}</section>
        </div>
        <Footer></Footer>
    </article>
);

export default Content;