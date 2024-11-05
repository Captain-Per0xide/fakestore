"use client";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import React from "react";
import SingleCartCard from "./SingleCartCard";

const CartComponent = () => {
  const cart = useAppSelector(getCart); // Ensure cart is an array

  return (
    <div className="">
      <h1 className="font bold text-2xl text-orange-400 mb-5">
        Shopping Cart:
      </h1>
      <div className="flex flex-col gap-4">
        {cart.map((item: any, key: any) => (
          <SingleCartCard key={key} item={item} />
        ))}
      </div>
      <div>
        <h1 className="text-orange-400 font-bold text-2xl text-right">
          Total: $
          {Array.isArray(cart)
            ? cart.reduce(
                (acc: any, item: any) => acc + item.quantity * item.price,
                0
              )
            : 0}
        </h1>
      </div>
    </div>
  );
};

export default CartComponent;
