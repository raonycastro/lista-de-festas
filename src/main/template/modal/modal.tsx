import Button from "../button/button";

interface Props {
    titulo?: string;
    botaoConfirm?: any;
    botaoCancel?: any;
}

const Modal = (props: Props) => (
    <article>
        <h2>{ props?.titulo }</h2>
        <div>
            <Button {...props.botaoCancel} />
            <Button {...props.botaoConfirm} />
        </div>
    </article>
);

export default Modal;