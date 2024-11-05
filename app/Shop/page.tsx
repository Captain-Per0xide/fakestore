"use client"
import ShopPage from '@/components/ShopPage'
import { useSupabase } from '@/hooks/useSupabase';

import React, { useEffect } from 'react'

const ShoppingPage = () => {
   const {products, getDataFromSupabase} = useSupabase();
    useEffect(() => {
        getDataFromSupabase();
    },[])
    return (
    <div className='text-white'>
        <ShopPage products={products} />
        </div>
  )
}

export default ShoppingPage