import { filterData } from "../../Constants/filters";
import "./index.css";

const Filter = ({ selectedFilters, setSelectedFilters }) => {
  
  const handleFilterChange = (event, item, value) => {
    const isChecked = event?.target?.checked;
    if (isChecked) {
      if (item?.type === "range") {
        return setSelectedFilters((prev) => ({
          ...prev,
          [item?.name]: [...prev?.[item?.name], value?.min, value?.max],
        }));
      }
      setSelectedFilters((prev) => ({
        ...prev,
        [item?.name]: [...prev?.[item?.name], value],
      }));
    } else {
      if (item?.type === "range") {
        const selectedRangeFilters = selectedFilters?.price;
        const filteredValues = selectedRangeFilters?.filter(
          (item) => item !== value?.min && item !== value?.max
        );
        return setSelectedFilters((prev) => ({
          ...prev,
          [item?.name]: filteredValues,
        }));
      }
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
            value={option?.value}
            className="filter-checkbox"
            id={item?.type === "range" ? option?.value?.min : option?.value}
            onChange={(event) => handleFilterChange(event, item, option?.value)}
          ></input>
          <label
            htmlFor={
              item?.type === "range" ? option?.value?.min : option?.value
            }
            className="filter-checkbox"
          >
            {option?.label}
          </label>
        </div>
      ))}
    </div>
  ));
};

export default Filter;
