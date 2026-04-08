import "./Button.css";

import React from "react";

interface ButtonProps {
  symbol?: string;
  btnText: string;
  btnWidth?: string;
  btnHeight?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  sty?: string;
}

const Button = ({
  symbol,
  btnText,
  btnWidth,
  btnHeight,
  icon,
  onClick,
  sty,
}: ButtonProps) => {
  return (
    <button
      style={{ width: btnWidth, height: btnHeight }}
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
