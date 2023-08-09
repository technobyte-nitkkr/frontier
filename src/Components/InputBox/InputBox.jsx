import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="inpBoxContainer">
      <input className="inpBox" placeholder="Email Address" type={"email"} />
    </div>
  );
};

export default InputBox;
