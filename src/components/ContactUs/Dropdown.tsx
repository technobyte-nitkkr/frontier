import Countries from "./Countries";
import { ChangeEvent } from "react";

interface DropdownProps {
  selectedCounty: string;
  handleCountyChange: (county: string) => void;
}

const Dropdown = ({ selectedCounty, handleCountyChange }: DropdownProps) => {
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleCountyChange(e.target.value);
  };

  return (
    <select
      id="drop"
      onChange={handleDropdownChange}
      value={selectedCounty}
      style={{
        height: "46px",
        width: "90px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        color: "#e6edf3",
        fontSize: "0.85rem",
        padding: "0 6px",
        outline: "none",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      {Countries.map((country) => (
        <option
          key={country.code}
          value={country.name}
          style={{ background: "#1a1a2e", color: "#e6edf3" }}
        >
          {country.dial_code}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
