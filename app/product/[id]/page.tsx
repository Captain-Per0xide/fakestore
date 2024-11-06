"use client";
import SingleProduct from "@/components/SingleProduct";
import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";

import React, { useEffect } from "react";

const Page = () => {
  const { id } = useParams();
  const {getSingleProduct, singleProduct}=useSupabase();
 useEffect(()=>{
    getSingleProduct(Number(id));
},[])
  return (
    <div>
      <div>
        <SingleProduct singleProduct={singleProduct} />
      </div>
    </div>
  );
};

export default Page;
