interface Props {
    show: boolean;
    children: JSX.Element;
}

const If = (props: Props) => {
    if (props.show) {
        return props.children;
    } else {
        return null;
    }
};

export default If;