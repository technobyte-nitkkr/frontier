import "./InputBox.css";

const InputBox = (sty) => {
  return (
    <div className={`inpBoxContainer ${sty}`}>
      <input className="inpBox" placeholder="Email Address" type={"email"} />
    </div>
  );
};

export default InputBox;
