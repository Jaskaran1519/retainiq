import Footer from "@/app/(components)/Footer";
import ProductGrid from "@/app/(components)/ProductGrid";
import { ArrowBigLeft, ArrowLeft, ArrowLeftIcon, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const demo = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex justify-between items-center p-5 mx-5 mb-10">
        <Link href="/">
          <div className="flex gap-5 items-center">
            <ArrowLeftIcon size={40} />

            <h1 className="font-semibold text-3xl">Back</h1>
          </div>
        </Link>
        <a
          href="https://github.com/Jaskaran1519/retainiq"
          target="_blank"
          className="p-2 border bg-gray-50 rounded-full"
        >
          <Github />
        </a>
        <button className="bg-green-500 text-white text-md font-semibold py-2 px-4 rounded-xl">
          <h1>Publish feed</h1>
        </button>
      </div>
      <ProductGrid />
      <div className="w-full h-44"></div>
      <Footer />
    </div>
  );
};

export default demo;
