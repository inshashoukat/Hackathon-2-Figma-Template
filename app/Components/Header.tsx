import Image from "next/image";
import Logo from "@/public/Pictures/logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '@/app/globals.css';

export default function Header() {
  return(
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-{1440} h-{100} bg-white">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

    <Image src={Logo} alt="Logo" width={185} height={41} />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center gap-9">
      <a className="mr-5 hover:text-gray-900" href="/">Home</a>
      <a className="mr-5 hover:text-gray-900" href="/shop">Shop</a>
      <a className="mr-5 hover:text-gray-900" href="/blog">Blog</a>
      <a className="mr-5 hover:text-gray-900" href="/contact">Contact</a>
    </nav>
    
    <MdPersonOutline className="text-black mr-4" />
    <CiSearch className="text-black mr-4"/>
    <GoHeart className="text-black mr-4"/>
    <AiOutlineShoppingCart className="text-black mr-4"/>

  </div>
</header>

    </div>
  )
}