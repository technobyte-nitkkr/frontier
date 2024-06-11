import Countries from "./Countries";

const Dropdown = ({ selectedCounty, handleCountyChange }) => {
  const handleDropdownChange = (e) => {
    const newCountry = e.target.value;
    handleCountyChange(newCountry);
  };

  return (
    <div>
      <select
        className="text-black h-12 md:my-4 my-1 w-full md:w-[15rem]"
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
