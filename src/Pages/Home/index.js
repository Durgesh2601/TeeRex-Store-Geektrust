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
  const [searchProducts, setSearchProducts] = useState(false);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state?.productsData);

  useEffect(() => {
    if (
      Object.values(selectedFilters).some((value) => value.length === 0) &&
      !searchText
    ) {
      getProductData();
    }
  }, [selectedFilters, searchProducts]);

  const filterProducts = useCallback(() => {
    const filteredProducts = productsData?.filter((product) => {
      if (
        selectedFilters.color.length > 0 &&
        !selectedFilters.color.includes(product.color)
      ) {
        return false;
      }
      if (
        searchText &&
        !product?.name?.toLowerCase().includes(searchText?.toLowerCase())
      ) {
        return false;
      }
    });
    dispatch(setProductData(filteredProducts));
  }, [selectedFilters, searchProducts]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const getProductData = () => {
    fetch(GET_PRODUCTS_API)
      .then((res) => res.json())
      .then((data) => dispatch(setProductData(data)));
  };

  return (
    <div className="homepage-container">
      <div className="search-input">
        <input
          placeholder="Search for products..."
          className="search-box"
          value={searchText}
          onChange={(event) => setSearchText(event?.target?.value)}
        />
        <div
          className="search-icon-container"
          onClick={() => setSearchProducts((prev) => !prev)}
        >
          <BsSearch className="search-icon" />
        </div>
      </div>
      <div className="main-container">
        <div className="filters-container">
          <Filter />
        </div>
        <div className="products-container">
          {productsData?.length > 0 ? (
            productsData?.map((item) => (
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
