"use client";
import React from "react";
import CartComponent from "./CartComponent";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { Button } from "./ui/button";
import CheckOutCard from "./CheckOutCard";

const Cart = () => {
  const cart = useAppSelector(getCart);
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex justify-center items-center gap-5">
        <CartComponent />
        {cart.length > 0 && (
          <CheckOutCard cart={cart} />
        )}
      </div>
    </div>
  );
};

export default Cart;
