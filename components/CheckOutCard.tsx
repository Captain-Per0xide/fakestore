import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MdNavigateNext } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

const CheckOutCard = ({cart}:{cart:any}) => {
  return (
    <div className="h-[550px] w-fit rounded-md border p-10 border-gray-300 flex flex-col justify-center gap-9">
        <div className="flex items-center gap-2">
        <h1 className="text-nowrap text-white text-[20px] font-md"> One Click Checkout </h1>
        <IoBagCheckOutline className="text-[20px] text-white" />

        </div>
       <div className="flex gap-4">
       <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className=" text-nowrap text-white  font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        This will be a gift
      </label>
       </div>
    <div>
        <h1  className='text-orange-400 font-bold text-xl text-center'>
                Total: ${cart.reduce((acc:any, item:any)=>acc+item.price, 0)}
            </h1>
    </div>
      <Button className=" bg-purple-500">Checkout
      <MdNavigateNext />
      </Button>
        <div className="flex items-center gap-2">
        <p className="text-white text-nowrap">Approved by FakeStore</p>
        <FaCheckCircle className="text-orange-500" />
        </div>
    </div>
  );
};

export default CheckOutCard;
