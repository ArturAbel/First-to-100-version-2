import "./Button.css";

export const Button = ({
  text,
  buttonAction,
  disabled,

}) => {
  return (
    <button className="button" onClick={()=>buttonAction()} disabled={disabled}>
      {text}
    </button>
  );
};
