import Image from "next/image";
import {Button} from "@/components/ui/button"
import ListingListFilters from "@/components/ListingListFilters";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="">
      <div className=" flex flex-col relative  mx-auto justify-center items-center">
        <Image
          src="https://images.unsplash.com/photo-1536698658763-878a02695d1c"
          alt="img-blur-shadow"
          width={1500}
          height={700}
          className="h-screen block rounded-lg "
        />

        <div className="md:mt-4 absolute inset-0 z-1 flex flex-col justify-start md:justify-center items-center gap-4">

          <div>
            <ListingListFilters />
            </div>
          <Button>Explore All</Button>
        </div>
    
      </div>
     
      
      <Footer/>
      

      
    </main>
  );
}
