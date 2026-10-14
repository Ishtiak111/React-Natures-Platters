import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import PopularProducts from "./components/PopularProducts";
import type { IPopularProduct } from "./types";

const userFetch = async (): Promise<IPopularProduct[]> => {
  const res = await fetch("/popularProducts.json");
  const date = await res.json();
  return date;
};
const userPromise = userFetch();

const App = () => {
  const [carts, setCart] = useState<IPopularProduct[]>([]);
  return (
    <>
      <Navbar carts={carts} setCart={setCart} />
      <Banner />
      <Services />
      <Suspense fallback={<h2>Loading...</h2>}>
        <PopularProducts
          userPromise={userPromise}
          carts={carts}
          setCart={setCart}
        />
      </Suspense>
    </>
  );
};

export default App;
