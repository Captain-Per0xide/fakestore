import { supabase } from "@/library/supabase/products";
import { useState } from "react";

export const useSupabase = () => {
const [products, setProducts] = useState<any>([]);
const [singleProduct, setSingleProduct] = useState<any>([]);
const getDataFromSupabase = async () => {
let{data, error} = await supabase.from('products').select('*');
if (error) throw error;
if (data) {
    setProducts(data);
};
}
const getSingleProduct= async(id:number)=>{
    let {data,error}=await supabase.from('products').select('*').eq('id',id);
    if(data){
        setSingleProduct(data);
    }
    if(error) throw error;
}
return { products, getDataFromSupabase, getSingleProduct, singleProduct };
}