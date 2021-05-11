import './content.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { BreadCrumbInterface } from '../../util/interfaces';
import BreadCrumb from '../bread-crumb/break-crumb';
import If from '../../condicao/if';

interface Props {
    titulo: string;
    subtitulo: string;
    componente: string;
    children: JSX.Element;
    breadCrumbs: BreadCrumbInterface[];
}

const Content = (props: Props) => (
    <article className="Content">
        <If show={!!props?.breadCrumbs?.length}>
            <BreadCrumb breadCrumbs={props?.breadCrumbs} />
        </If>
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