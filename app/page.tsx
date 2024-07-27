import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link href="/demo">
        <h1 className="text-[2rem] px-4 py-2 bg-blue-400 text-white rounded-xl">
          Demo
        </h1>
      </Link>
    </div>
  );
};

export default page;
