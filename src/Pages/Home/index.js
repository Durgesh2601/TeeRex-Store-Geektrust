import { useEffect, useState } from "react";
import { GET_PRODUCTS_API } from "../../api/productApi";
import "./index.css";
import ProductCard from "../../Components/ProductCard";
import EmptyScreen from "../../Components/EmptyScreen";
import Filter from "../../Components/Filters";
import { useSelector } from "react-redux";

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const state = useSelector((state) => state);

  useEffect(() => {
    getProductData();
  }, []);

  console.log(state)

  const getProductData = () => {
    fetch(GET_PRODUCTS_API)
      .then((res) => res.json())
      .then((data) => setProductsData(data));
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
              <ProductCard product={item} key={item?.id} />
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
