interface Props {
    onClick: () => void;
}

function Button(props: Props) {
    return (
        <button onClick={props.onClick} className="btn btn-primary">
            Add
        </button>
    );
}

export default Button;
