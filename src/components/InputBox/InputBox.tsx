interface InputBoxProps {
  sty?: string;
}

const InputBox = ({ sty }: InputBoxProps) => {
  return (
    <div className={`inpBoxContainer ${sty || ""}`}>
      <input className="inpBox" placeholder="Email Address" type={"email"} />
    </div>
  );
};

export default InputBox;
