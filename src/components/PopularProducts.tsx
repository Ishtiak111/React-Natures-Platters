import {
  use,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { IPopularProduct } from "../types";

import PopularProductCard from "./PopularProductCard";

interface IPopularProducts {
  userPromise: Promise<IPopularProduct[]>;
  carts: IPopularProduct[];
  // setCart: React.Dispatch<React.SetStateAction<IPopularProduct[]>>
  setCart: Dispatch<SetStateAction<IPopularProduct[]>>;
}

const PopularProducts = ({ userPromise, carts, setCart }: IPopularProducts) => {
  const data = use(userPromise);
  // const [carts, setCart] = useState<IPopularProduct[]>([]);

  
  return (
    <div className="container mx-auto my-[80px]">
      <h2 className="text-3xl font-bold mb-4 text-[#179800]">
        Popular Products
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 rounded-md shadow-2xl p-4 bg-gradient-to-br from-[#179800] to-[#cfdccd]">
          <h2 className="font-bold text-2xl">30% off</h2>
          <p>Discover a world of treats, toys, and essentials handpicked for</p>
          <button className="bg-white text-[#179800] font-bold py-2 px-4 rounded-md hover:bg-gray-200">
            Buy Now
          </button>
        </div>
        <div className="col-span-8 rounded-md">
          <div className="grid grid-cols-3 gap-4">
            {data.map((product) => {
              return (
                <PopularProductCard key={product.title} product={product} carts={carts} setCart={setCart} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
