import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { GET_PRODUCTS_API } from "../../api/productApi";
import { setProductData } from "../../redux/reducer";
import { MainProductCard } from "../../Components/ProductCard";
import Filters from "../../Components/Filters";
import EmptyScreen from "../../Components/EmptyScreen";
import { getAfterSearchData } from "../../Utils/helperFunctions";
import "./index.css";
import FilterDrawer from "../../Components/FilterDrawer";
import { emptyFilters } from "../../Constants/filters";

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState(emptyFilters);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilterDrawer, setIsFilterDrawer] = useState(false);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state?.productsData);

  useEffect(() => {
    getProductData();
    // eslint-disable-next-line
  }, []);

  const filterProducts = useCallback(() => {
    let data = productsData;
    if (searchText) {
      const afterSearchData = getAfterSearchData(productsData, searchText);
      data = afterSearchData;
    }
    if (selectedFilters?.price?.length > 0) {
      const minValue = Math.min(...selectedFilters?.price);
      const maxValue = Math.max(...selectedFilters?.price);
      const tempData = data;
      data = tempData?.filter(
        (item) => item?.price > minValue && item?.price < maxValue
      );
    }
    const { price, ...otherFilters } = selectedFilters;
    let filteredArr = data;
    if (Object.values(otherFilters).some((value) => value.length > 0)) {
      filteredArr = data?.filter((item) => {
        return Object.keys(selectedFilters)?.every((filter) => {
          if (!selectedFilters[filter].length) {
            return true;
          }
          return selectedFilters[filter].includes(item[filter]);
        });
      });
    }
    setData(filteredArr);
  }, [productsData, selectedFilters, searchText]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const getProductData = () => {
    setLoading(true);
    fetch(GET_PRODUCTS_API)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProductData(data));
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  const setSearchItems = (searchVal) => {
    setSearchText(searchVal);
    if (searchVal) {
      const afterSearchData = getAfterSearchData(productsData, searchVal);
      setData(afterSearchData);
    }
  };

  const handleShowDrawer = (event) => {
    event.stopPropagation();
    setIsFilterDrawer((prev) => !prev);
  };

  return loading ? (
    <h4 className="loading">Loading...</h4>
  ) : (
    <div className="homepage-container">
      <div className="search-input">
        <input
          placeholder="Search for products..."
          className="search-box"
          value={searchText}
          onChange={(event) => setSearchItems(event?.target?.value)}
        />
        <div
          className="search-icon-container"
          onClick={() => setSearchItems(searchText)}
        >
          <BsSearch className="homepage-icons" />
        </div>
        <div className="search-icon-container filter-icon">
          <CiFilter className="homepage-icons" onClick={handleShowDrawer} />
        </div>
      </div>
      <FilterDrawer
        {...{
          isFilterDrawer,
          setIsFilterDrawer,
          selectedFilters,
          setSelectedFilters,
        }}
      />
      <div className="main-container">
        <div className="filters-container">
          <Filters {...{ selectedFilters, setSelectedFilters }} />
        </div>
        <div className="products-container">
          {data?.length > 0 ? (
            data?.map((item) => (
              <MainProductCard product={item} key={item?.id} />
            ))
          ) : (
            <EmptyScreen />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
