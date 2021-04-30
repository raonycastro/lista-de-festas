interface Props {
    titulo: string;
    subtitulo: string;
}

const Header = (props: Props) => (
    <header className="Header">
        <h1>{props?.titulo}</h1>
        <p>{props?.subtitulo}</p>
    </header>
);

export default Header;