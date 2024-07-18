import Link from "next/link";

const ContactUs = () => {
   return (
      <div className="flex h-[20rem] flex-col items-center justify-between p-24">
         <div className=" text-2xl">Contact Us page</div>
         <Link className=" bg-blue-600 to-white p-3 rounded-md text-white" href={"/"}>main</Link>
      </div>
   );
}

export default ContactUs;