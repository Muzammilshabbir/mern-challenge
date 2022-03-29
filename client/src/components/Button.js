import style from './button.module.css';

export default function Button(props) {
    return (
        <input type="submit" onClick={props.handleSubmit} name="login" className={`${style.btn} ${style.loginSubmit}`} value={props.value} />
    )
}
