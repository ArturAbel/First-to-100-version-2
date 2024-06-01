import "./Button.css";

export const Button = ({
  buttonAction,
  text,
  disabled,

}) => {
  return (
    <button className="button" onClick={()=>buttonAction()} disabled={disabled}>
      {text}
    </button>
  );
};
