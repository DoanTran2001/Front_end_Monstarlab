import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import products from "../../utils/data";
import { removeAccents } from "../../utils/utils";

function Home() {
  const search = useSelector((state) => state.cart.search);
  const filterProduct = products.filter((product) =>
    removeAccents(product.name).includes(removeAccents(search))
  );
  return <ProductList list={filterProduct} />;
}

export default Home;
