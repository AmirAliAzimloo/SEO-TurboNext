export default async function sitemap(){

   const res=await fetch("https://api.escuelajs.co/api/v1/products",{cache:"no-store"});
   const data=await res.json();
   const ids=data.map((da:any)=>{
      return {
         url:`${process.env.NEXT_PUBLIC_BASE_URL}/shop/${da.id}`,
         lastModified:da.updatedAt
      }
   })


   return [
      {
         url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
         lastModified:new Date()
      },
      {
         url:`${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
         lastModified:new Date()
      },
      ...ids
   ]
}