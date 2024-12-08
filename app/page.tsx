
import Hero from "@/app/Components/Hero";
import Subhero from "@/app/Components/Subhero";
import Products from "@/app/Components/Products"
import Inspiration from "./Components/Inspiration";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <Subhero />
      <Products/>
      <Inspiration />
      </div>
  )
}