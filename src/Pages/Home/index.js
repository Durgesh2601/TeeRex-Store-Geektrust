import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS_API } from "../../api/productApi";
import { setProductData } from "../../redux/reducer";
import { MainProductCard } from "../../Components/ProductCard";
import EmptyScreen from "../../Components/EmptyScreen";
import Filter from "../../Components/Filters";
import "./index.css";

const Home = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state?.productsData);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    fetch(GET_PRODUCTS_API)
      .then((res) => res.json())
      .then((data) => dispatch(setProductData(data)));
  };

  return (
    <div className="homepage-container">
      <div className="search-input">
        <input placeholder="Search for products..." />
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
