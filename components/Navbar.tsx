import Link from "next/link";



const Navbar = () => {
    return (
      <>
        <div className='flex flex-row justify-between items-center mx-auto  max-w-7xl  p-4'>
          <Link href='/'>Home</Link>
          <Link href='/favorites'>Favorites</Link>
        </div>
       
      </>
    );
  };
  
  export default Navbar;