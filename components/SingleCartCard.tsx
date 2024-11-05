import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { removeFromTheCart,updateItemQuantity } from "@/redux/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

const SingleCartCard = ({ item }: { item: any }) => {
  const [counter, setCounter] = useState(item.quantity);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    dispatch(updateItemQuantity({ id: item.id, quantity: newCounter }));
  };

  const handleDecrement = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
    dispatch(updateItemQuantity({ id: item.id, quantity: newCounter }));
  };

  return (
    <div className="flex gap-4 p-5 justify-center border rounded-md">
      <Image className="rounded-lg" src={item.image} width={200} height={150} alt={item.title} />
      <div className="flex flex-col gap-5">
        <h1 className="text-white">{item.title}</h1>
        <p className="text-purple-500">{item.description}</p>
        <div className="flex gap-5 items-center">
          <Button onClick={() => {
            dispatch(removeFromTheCart({ id: item.id }));
          }} className="bg-red-500 w-[20%]">Remove</Button>

          <div className="flex gap-4 ">
            <Button onClick={handleDecrement} className="bg-gray-500 w-8 h-8"><FaMinus /></Button>
            <h1 className="text-white">{counter}</h1>
            <Button onClick={handleIncrement} className="bg-gray-500 w-8 h-8"><FaPlus /></Button>
          </div>
        </div>
      </div>
      <p className="text-orange-500 font-bold text-xl">${item.price}</p>
    </div>
  );
};

export default SingleCartCard;
