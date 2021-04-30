import './input.css';

interface Props {
    id: string;
    name: string;
    type: string;
    value: any;
    onChange: Function;
    readOnly?: boolean;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
}

const Input = (props: Props) => (
    <div className="Input">
        <label htmlFor={props?.id}>{props?.name}</label>
        <input
            type={props?.type}
            id={props?.id}
            value={props?.value}
            onChange={e => props?.onChange(e)}
            readOnly={props?.readOnly}
            disabled={props?.disabled}
            maxLength={props?.maxLength}
            minLength={props?.minLength} />
    </div>
);

export default Input;