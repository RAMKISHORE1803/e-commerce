"use client";
import Link from "next/link";
import Image from "next/image";
import ikea from "../icons/ikea.svg";
import SearchBar from "../SearchBar";
import truck from "../icons/truck.svg";
import store from "../icons/store.svg";
import profile from "../icons/profile.svg";
import heart from "../icons/heart.svg";
import cartIcon from "../icons/cart.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCount(totalItems);
  }, [cart]);

  return (
    <nav className="text-black p-6 w-[100vw] min-w-[100vw] max-w-[100vw] h-[var(--navbar-height)] shadow-md flex-col md:flex lg:flex">
      {/* For mobile */}
      <div className="flex-col justify-between md:hidden lg:hidden">
        <div className="flex justify-between">
          <Link href="/" className="text-xl font-bold">
            <Image src={ikea} alt="ikea-icon" />
          </Link>
          <div className="flex gap-5 text-sm items-center mb-6">
            <div className="mr-4 flex gap-2 cursor-pointer">
              <Image src={profile} alt="profile-icon" />
            </div>
            <div>
              <Image src={heart} alt="heart-icon" />
            </div>
            <Link href={"/shoppingcart"}>
              <Image src={cartIcon} alt="cart-icon" />
              {cart.length > 0 && (
                <span className="absolute top-16 right-5 bg-themeBlue text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-between lg:hidden">
        <div className="flex gap-2 cursor-pointer">
          <Image src={truck} alt="truck-icon" />
          <span>Enter postal code</span>
        </div>
        <div className="mr-4 flex gap-2">
          <Image src={store} alt="store-icon" />
          <span>Select store</span>
        </div>
      </div>

      {/* For desktop */}
      <div className="hidden md:flex lg:flex max-w-full mx-auto justify-between items-center gap-96">
        <div className="flex gap-4">
          <Link href="/" className="text-xl font-bold">
            <Image src={ikea} alt="ikea-icon" />
          </Link>
          <SearchBar />
        </div>
        <div className="flex gap-5 text-sm">
          <div className="flex gap-2 cursor-pointer">
            <Image src={truck} alt="truck-icon" />
            <span>Enter postal code</span>
          </div>
          <div className="mr-4 flex gap-2">
            <Image src={store} alt="store-icon" />
            <span>Select store</span>
          </div>
          <div className="mr-4 flex gap-2 cursor-pointer">
            <Image src={profile} alt="profile-icon" />
            <span>Hej! Log in</span>
          </div>
          <div>
            <Image src={heart} alt="heart-icon" />
          </div>
          <Link href={"/shoppingcart"}>
            <Image src={cartIcon} alt="cart-icon" />
            {cart.length > 0 && (
              <span className="absolute top-[4.5rem] right-11 bg-themeBlue text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;