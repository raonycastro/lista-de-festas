import './table.css';
import { ButtonAction } from '../../util/interfaces/button-action.interface';
import Button from '../button/button';

interface Props {
    header: string[];
    data: string[][];
    colunmClass: string[];
    buttons?: ButtonAction[][];
}

function createHeader(header: string[], colunmClass: string[] = []) {
    return header.map((h, i) => <th key={i} className={colunmClass[i]}>{h}</th>);
}

function createTr(data: string[][], colunmClass: string[], buttons?: ButtonAction[][]) {
    return data.map((d, i) => {
        return <tr key={i}>{createTd(i, d, colunmClass, buttons && buttons[i])}</tr>;
    });
}

function createTd(index: number, data: string[], colunmClass: string[], buttons?: ButtonAction[]) {
    const tds = data.map((td, i) => {
        return <td key={i} className={colunmClass[i]}>{td}</td>;
    });
    if (buttons) {
        tds.push(<td key={tds.length}>{
            buttons.map((b, i) => 
                <Button
                    key={i}
                    type={b.type}
                    color={b.color}
                    icon={b.icon}
                    link={b.link}
                    action={() => b.action ? b.action(index) : null} />)
        }</td>)
    }
    return tds;      
}

const Table = (props: Props) => {
    const header = createHeader(props.header, props.colunmClass); 
    const tbody = createTr(props.data, props.colunmClass, props.buttons);
    return <table className="Table">
        <thead>
            <tr>{header}</tr>
        </thead>
        <tbody>{tbody}</tbody>
    </table>;
}

export default Table;