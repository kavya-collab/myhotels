import Link from "next/link";



const Navbar = () => {
    return (
      <>
        <div className='flex flex-row justify-between items-center mx-auto  max-w-7xl   rounded-lg p-4'>
          <Link href='/' className="hover:text-white hover:bg-black p-2 rounded-md" >Home</Link>
          <Link href='/favorites' className="hover:text-white hover:bg-black  p-2 rounded-md">Favorites</Link>
        </div>
       
      </>
    );
  };
  
  export default Navbar;