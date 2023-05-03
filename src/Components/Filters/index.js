import { filterData } from "../../Constants/filters";
import "./index.css";

const Filter = ({ selectedFilters, setSelectedFilters }) => {
  const handleFilterChange = (event, item, value) => {
    const isChecked = event?.target?.checked;
    if (isChecked) {
      // if (item?.type === "range") {
      //   const selectedRangeFilters = selectedFilters?.price;

      //   return setSelectedFilters((prev) => ({
      //     ...prev,
      //     [item?.name]: {},
      //   }));
      // }
      setSelectedFilters((prev) => ({
        ...prev,
        [item?.name]: [...prev?.[item?.name], value],
      }));
    } else {
      const selectedFilterItem = selectedFilters?.[item?.name];
      const filteredItemValues = selectedFilterItem?.filter(
        (element) => element !== value
      );
      setSelectedFilters((prev) => ({
        ...prev,
        [item?.name]: filteredItemValues,
      }));
    }
  };

  return filterData?.map((item) => (
    <div className="filter-item" key={item?.key}>
      <h4>{item?.label}</h4>
      {item?.options?.map((option, index) => (
        <div className="filter-option" key={`${option}-${index}`}>
          <input
            type="checkbox"
            value={option}
            className="filter-checkbox"
            id={option}
            onChange={(event) => handleFilterChange(event, item, option)}
          ></input>
          <label htmlFor={option} className="filter-checkbox">
            {option}
          </label>
        </div>
      ))}
    </div>
  ));
};

export default Filter;
