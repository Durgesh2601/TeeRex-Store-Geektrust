import { filterData } from "../../Constants/filters";
import "./index.css";

const Filter = ({}) => {
  return filterData?.map((item) => (
    <div className="filter-item" key={item?.key}>
      <h4>{item?.name}</h4>
      {item?.options?.map((option, index) => (
        <div className="filter-option" key={`${option}-${index}`}>
          <input
            type="checkbox"
            value={option}
            className="filter-checkbox"
          ></input>
          <span>{option}</span>
        </div>
      ))}
    </div>
  ));
};

export default Filter;
