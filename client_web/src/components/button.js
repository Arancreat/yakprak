import styles from "./button.css";

const Button = (props) => {
    return (
        <button class="btn" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
