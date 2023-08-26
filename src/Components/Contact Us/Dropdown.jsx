import Countries from "./Countries";

const Dropdown = ({ selectedCounty, handleCountyChange }) => {
  const handleDropdownChange = (e) => {
    const selectedCountry = e.target.value;
    handleCountyChange(selectedCountry);
  };

  return (
    <div>
      <select
        className="text-black w-[15rem] h-12 "
        id="drop"
        onChange={handleDropdownChange}
        value={selectedCounty}
      >
        {Countries.map((country) => (
          <option
            className="text-black w-[18rem]"
            key={country.code}
            value={country.name}
            selected={country.name === selectedCounty}
          >
            <img src={country.emoji} alt={country.name}></img>
            {country.emoji}
            {country.name}({country.dial_code})
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
