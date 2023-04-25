import "./index.css";

const filterData = [
  { name: "Colour", options: ["Red", "Blue", "Green"] },
  { name: "Gender", options: ["Men", "Women"] },
  { name: "Price", options: ["0-Rs.250", "Rs.251-450", "Rs.450"] },
  { name: "Type", options: ["Polo", "Hoodie", "Basic"] },
];

const Filter = ({}) => {
  return filterData?.map((item) => (
    <div className="filter-item">
      <h4>{item?.name}</h4>
      {item?.options?.map((option) => (
        <div className="filter-option">
            <input type="checkbox" value={option} className="filter-checkbox"></input>
            <span>{option}</span>
        </div>
      ))}
    </div>
  ));
};

export default Filter;
