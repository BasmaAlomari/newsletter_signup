"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./core/Button";

const DismissButton = ({ referralCode }: { referralCode?: string | null }) => {
  const router = useRouter();
  return (
    <div className=" sm:mb-5">
       <Button className="h-[55px] w-[350px]" size="medium" onClick={()=> router.push('./')}>Dismiss Message</Button>
    </div>
  );
};

export default DismissButton;