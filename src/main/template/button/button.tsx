import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './button.css';
import FaIcons from '../../util/icons/fa-icons';
import { Link } from 'react-router-dom';

interface Props {
    color: string;
    type: 'mini' | 'normal' | 'wide';
    link?: string;
    action?: Function;
    value?: string;
    icon?: string;
    disabled?: boolean;
}

const Button = (props: Props) => {
    const className = `Button Button-${props.color} Button-${props.type}`;
    const value = props.icon ?
        <span><FontAwesomeIcon icon={FaIcons(props.icon)} />{props?.value}</span> :
        props?.value;
    const button = <button
        className={className}
        onClick={e => props.action && !props.disabled ? props.action() : null}>{value}</button>;
    if (props.link) {
        return <Link to={props.link}>{button}</Link>
    }
    return button;
}

export default Button;