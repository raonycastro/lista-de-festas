import {
    IconDefinition,
    faPen,
    faTrashAlt,
    faPlus,
    faEye
} from '@fortawesome/free-solid-svg-icons';

const FaIcons = (icon: string | undefined): IconDefinition => {
    switch(icon) {
        case 'pen':
            return faPen;
        case 'trash-alt':
            return faTrashAlt;
        case 'plus':
            return faPlus;
        case 'eye':
            return faEye;
        default:
            return faPen;
    }
}

export default FaIcons;