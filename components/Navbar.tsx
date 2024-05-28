"use client"
import { createClient } from "@/utils/supabase/client";

import Link from "next/link";
import {  useRouter } from "next/navigation";


import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { toggleIsLoggedIn } from "@/lib/features/listingsSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";





const Navbar = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector((state: RootState) => state.listings)

  const router = useRouter()

  // console.log(isLoggedIn) 


  const signIn = async () => {

    // dispatch(toggleIsLoggedIn(true));
    return  router.push('/login')

  }



  const signOut = async () => {
    // "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    dispatch(toggleIsLoggedIn(false));
    return router.push('/login')
  };
  return (
    <nav>
      <div className='flex flex-row justify-between items-center mx-auto  max-w-7xl   rounded-lg p-4'>
        <Link href='/' className="hover:text-white hover:bg-black p-2 rounded-md" >Home</Link>
        <div className="">
          <Link href='/favorites' className="hover:text-white hover:bg-black  p-2  rounded-md">Favorites</Link>
          
          {isLoggedIn ? (
                <Button onClick={signOut} className="hover:text-white hover:bg-black p-2  bg-white text-black rounded-md">
                    Sign Out
                </Button>
            ) : (
                <Button onClick={signIn} className="hover:text-white hover:bg-black p-2 bg-white text-black rounded-md">
                    Login
                </Button>
            )}
        </div>


      </div>



    </nav>
  );
};

export default Navbar;