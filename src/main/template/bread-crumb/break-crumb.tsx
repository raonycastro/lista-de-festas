import './bread-crumb.css';
import { Link } from 'react-router-dom';
import { BreadCrumbInterface } from '../../util/interfaces';
import If from '../../condicao/if';

interface Props {
    breadCrumbs: BreadCrumbInterface[];
}

const BreadCrumb = (props: Props) => {
    const links = props.breadCrumbs.map((breadCrumb, index) =>
        <span key={index}><Link to={breadCrumb.link}>{breadCrumb.nome}</Link>
            <If show={index < props.breadCrumbs.length - 1}><span className="arrow">&gt;</span></If>
        </span>);
    return <div className="BreadCrumb">{links}</div>
}

export default BreadCrumb;