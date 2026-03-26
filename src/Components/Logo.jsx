import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Image src="/Logo.png" alt="heart" width={40} height={40} />
      <p className="text-[#212337] text-2xl font-bold">Fresh Harvests</p>
    </div>
  );
};

export default Logo;
