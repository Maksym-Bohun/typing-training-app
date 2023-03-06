import classes from "./Input.module.css";

export function Input(props) {
  return (
    <div className={classes.inputs} style={props.style}>
      <input
        type="text"
        className={`${classes.input} ${classes["input-placeholder"]}`}
        placeholder={props.text}
        disabled={true}
      ></input>
      <input
        type="text"
        className={classes.input}
        onChange={props.changeInputHandler}
        onKeyDown={props.keyPressHandler}
        onKeyUp={props.keyUpHandler}
        disabled={props.disabled}
        value={props.inputText}
      ></input>
    </div>
  );
}
