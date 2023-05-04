import { useRef, useEffect } from "react";
import Filters from "../Filters";
import "./index.css";

const FilterDrawer = ({
  isFilterDrawer,
  setIsFilterDrawer,
  selectedFilters,
  setSelectedFilters,
}) => {
  const filterDrawerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDrawer);
    return () => {
      window.removeEventListener("click", handleClickOutsideDrawer);
    };
    // eslint-disable-next-line
  }, [filterDrawerRef]);

  const handleClickOutsideDrawer = (event) => {
    if (
      filterDrawerRef.current &&
      !filterDrawerRef.current.contains(event.target)
    ) {
      setIsFilterDrawer(false);
    }
  };

  return (
    <div
      className={`filter-drawer ${isFilterDrawer ? "open" : ""}`}
      ref={filterDrawerRef}
    >
      <div className="drawer-content">
        <Filters {...{ selectedFilters, setSelectedFilters }} />
      </div>
    </div>
  );
};

export default FilterDrawer;
