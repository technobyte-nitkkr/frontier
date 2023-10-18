import "./Button.css";

const Button = ({
  symbol,
  btnText,
  btnWidth,
  btnHeight,
  icon,
  onClick,
  sty,
}) => {
  return (
    <button
      style={{ width: { btnWidth }, height: { btnHeight } }}
      className={`btnContainer ${sty}`}
      onClick={onClick}
    >
      <div style={{ marginTop: "10px" }}>
        <span className="btnTextSymbol"> {symbol} </span>{" "}
        <span className="reactIcon"> {icon} </span>
        <span> {btnText} </span>
      </div>
    </button>
  );
};

export default Button;
