"use client";
import Image from "next/image";
import fakeStoreLogo from "../public/FakeStore-logo.svg";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const menuItem = ["Shop", "About", "Contact"];
const Header = () => {
  const cart=useAppSelector(getCart)
  return (
  <div className="flex flex-col">
    <div className="flex items-center py-2 justify-around gap-10">
      <div>
        <Image src={fakeStoreLogo} alt="logo" width={200} height={150} />
      </div>
      <div className="flex gap-10 font-semibold">
        <Link
          className=" text-white hover:underline hover:text-orange-400 text-xl"
          href={"/"}
          >
          Home
        </Link>
        {menuItem.map((item, key) => {
          return (
            <Link
            className=" text-white hover:underline hover:text-orange-400 text-xl"
            href={`/${item}`}
            key={key}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-6">
        <h1 className="hover:text-purple-500 hover:border-b-orange-400  text-orange-400 font-bold cursor-pointer border-b-2 border-b-purple-500 ">
          Sign In
        </h1>
        <h1 className="text-purple-500 font-bold cursor-pointer">
          Your Purchase
        </h1>
      </div>
      <div className="flex gap-5 items-center">
        <Link href="/cart">
            
          <div className="flex flex-col items-center">
            <h1 className="text-orange-400 ml-2">{cart.length}</h1>
            <FiShoppingCart className=" hover:text-red-500 text-2xl text-purple-400" />
          </div>
        </Link>
        <Link href="/user">
          <div>
            <FaRegUserCircle className="text-2xl text-orange-400 hover:text-white opacity-85 hover:opacity-100 transition" />
          </div>
        </Link>
      </div>
    </div>
      <div className="flex justify-end items-center">
      <Button className="bg-orange-500 opacity-85 hover:opacity-100 transition" asChild>
      <Link href="/SignOut">Sign Out</Link>
    </Button>
      </div>
  </div>

  );
};

export default Header;
