"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/library/supabase/products'
import { ThemeSupa } from '@supabase/auth-ui-shared'
const SignIn = () => {
  return (
    <div className='w-[40%] mx-auto '>
    <Auth 
    supabaseClient={supabase}
    appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: 'darkorange',
              brandAccent: 'darkpurple',
            },
          },
        },
      }}
    providers={['google', 'github', 'facebook']}
    theme='dark'
   />
    </div>
  )
}

export default SignIn