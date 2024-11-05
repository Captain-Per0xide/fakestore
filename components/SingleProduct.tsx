import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div key={singleProduct.id} className="w-[80%] mx-auto">
      {singleProduct.map((product: any) => {
        return (
          <div className="flex gap-8" key={product.id}>
            <div >
              <Image
              className="rounded-lg"
                src={product.image}
                width={400}
                height={400}
                alt={product.title}
              />
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="text-orange-400 text-xl font-bold ">
                {product.title}
              </h1>
              <p className="text-purple-400 ">{product.description}</p>
              <p className="text-orange-500 font-bold text-xl">
                ${product.price}
              </p>
              <div className="flex gap-10">
                <Button
                  onClick={() => {
                    router.push(`/cart`);
                  }}
                  className="w-[30%] bg-orange-500"
                >
                  Buy Now
                </Button>
                <Button
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                  className="w-[30%] bg-purple-500"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
