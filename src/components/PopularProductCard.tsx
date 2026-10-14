import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPopularProduct } from '../types';
import { toast } from 'react-toastify';

interface IPopularProductCard{
    product: IPopularProduct;
    carts: IPopularProduct[];
    setCart: Dispatch<SetStateAction<IPopularProduct[]>>;
}

const PopularProductCard = ({product, carts, setCart}: IPopularProductCard) => {

    const handleAddToCart = (product: IPopularProduct) => {
    setCart([...carts, product]);
    toast.success("Added Successfully")
    console.log(carts);
  };

    return (
        <div
                  key={product.title}
                  className="bg-white p-4 rounded-md shadow-md"
                >
                  <img
                    src={product.productImg}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="font-bold text-lg">{product.title}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <p className="text-yellow-500">Rating: {product.rating}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#179800] text-white font-bold py-2 px-4 rounded-md hover:bg-[#145c00]"
                  >
                    add to cart
                  </button>
                </div>
    );
};

export default PopularProductCard;