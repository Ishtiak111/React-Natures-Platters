import { FaCartPlus, FaSearch } from "react-icons/fa";
import Logo from "../assets/nav-logo.png";
import type { IPopularProduct } from "../types";
import type { Dispatch, SetStateAction } from "react";

interface INavbarProps {
  carts: IPopularProduct[];
  setCart: Dispatch<SetStateAction<IPopularProduct[]>>;
}

const Navbar = ({ carts, setCart }: INavbarProps) => {
  return (
    <div className="border-b border-gray-300">
      <nav className="flex justify-between gap-4 container mx-auto py-3">
        <img src={Logo} alt="image not found!" className="w-[120px] h-[60px]" />
        <ul className="flex gap-4 items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <FaSearch />
          <FaCartPlus />
          <span className="border-2 rounded-lg px-3">{carts.length}</span>
          <button className="bg-blue-500 hover:bg-blue-600 hover:scale-110 transition-transform duration-300 text-white px-4 py-2 rounded-md cursor-pointer">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 hover:scale-110 transition-transform duration-300 text-white px-4 py-2 rounded-md cursor-pointer">
            SignUp
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
