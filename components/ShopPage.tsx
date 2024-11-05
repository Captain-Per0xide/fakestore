import React from "react";
import ProductCard from "./ProductCard";

const ShopPage = ({ products }: { products: any }) => {
  return (
    <div className="w-[80%] mx-auto">
      <div>
        <h1 className="text-orange-400 text-3xl font-semibold ">
          FakeStore Shopping :
        </h1>
        <p className="text-purple-500 font-bold text-">
          Results: {products.length}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 h-fit">
        {products.map((product: any) => {
          return (
            <div key={product.id} >
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
