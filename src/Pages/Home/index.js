import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { GET_PRODUCTS_API } from "../../api/productApi";
import { setProductData } from "../../redux/reducer";
import { MainProductCard } from "../../Components/ProductCard";
import EmptyScreen from "../../Components/EmptyScreen";
import Filter from "../../Components/Filters";
import "./index.css";

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    gender: [],
    price: {},
    type: [],
  });
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state?.productsData);

  useEffect(() => {
    getProductData();
  }, []);

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
    const filteredData = productsData?.filter((item) => {
      return Object.values(item)
        ?.join("")
        ?.trim()
        ?.toLocaleLowerCase()
        .includes(searchVal?.trim().toLocaleLowerCase());
    });
    setData(filteredData);
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
          <BsSearch className="search-icon" />
        </div>
      </div>
      <div className="main-container">
        <div className="filters-container">
          <Filter />
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
