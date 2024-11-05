import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

const SingleCartCard = ({ item }: { item: any }) => {
  return (
    <div className="flex gap-4 p-5 justify-center border rounded-md">
      <Image className="rounded-lg" src={item.image} width={200} height={150} alt={item.title} />
      <div className="flex flex-col gap-5">
        <h1 className="text-white">{item.title}</h1>
        <p className="text-purple-500">{item.description}</p>
        <div className="flex gap-5">
        <Button className="bg-red-500 w-[20%]">Remove</Button>
        <Select defaultValue="1">
      <SelectTrigger className="w-[20%] bg-zinc-300 text-black">
        <SelectValue placeholder="Quantity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Quantity</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        
      </div>
        <p className="text-orange-500 font-bold text-xl">${item.price}</p>
    </div>
  );
};

export default SingleCartCard;
