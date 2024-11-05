import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  return (
    <div className=" border border-red-400 rounded-md flex items-center justify-center flex-col gap-4 border-x-2 cursor-pointer p-5">
      <div
        onClick={() => {
          router.push(`/product/${product.id}`);
        }}
      >
        <div className="bg-transparent flex items-center justify-center">
          <Image
            className="p-3"
            width={250}
            height={400}
            src={product.image}
            alt={product.title}
          />
        </div>
        <h1>{product.title}</h1>
        <p className="text-center text-purple-500 font-medium">{`${product.description.substring(
          0,
          50
        )}...`}</p>
        <p className="font-bold text-xl text-orange-400 ml-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
