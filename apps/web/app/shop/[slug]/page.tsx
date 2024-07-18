import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IProductPageProps{
   params:{
      slug : string
   }
}

const ProductPage:FC<IProductPageProps> = async ({params}) => {
   const res=await fetch(`https://api.escuelajs.co/api/v1/products/${params.slug}`,{cache:"no-store"});
   const data=await res.json();
   
   if(!data.id){
      notFound()
   }

   return (
      <div className="flex h-[20rem] flex-col items-center justify-between p-24">
         <div className=" text-2xl">product {params.slug} page</div>
         <Link className=" bg-blue-600 to-white p-3 rounded-md text-white" href={"/"}>go to main page</Link>
      </div>
   );
}

export default ProductPage;