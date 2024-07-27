import ProductGrid from "@/app/(components)/ProductGrid";
import { ArrowBigLeft, ArrowLeft, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const demo = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex justify-between items-center p-5 mx-5 mb-10">
        <div className="flex gap-5 items-center">
          <ArrowLeftIcon size={40} />

          <Link href="/">
            <h1 className="font-semibold text-3xl">Back</h1>
          </Link>
        </div>
        <button className="bg-green-500 text-white text-md font-semibold py-2 px-4 rounded-xl">
          <h1>Publish feed</h1>
        </button>
      </div>
      <ProductGrid />
      <div className="w-full h-44"></div>
    </div>
  );
};

export default demo;
