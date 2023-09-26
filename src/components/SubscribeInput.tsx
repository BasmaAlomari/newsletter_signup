'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Button from "./core/Button";
const SubscribeInput = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    setIsValidEmail(emailPattern.test(email));
    
    
    if(emailPattern.test(email)){
    localStorage.setItem("email", email)
    router.push("/thankyou")
    }else{
      setIsValidEmail(false)
    }
   
  };

  return (
    <div className="sm:mb-5">
      <form onSubmit={handleSubmit} className="grid" noValidate>
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold text-[13px] mb-4">Email address</div>
          <div
            className={!isValidEmail ? "text-red-500 text-[15px]" : "hidden"}
          >
            Valid email required.
          </div>
        </div>
        <input
          className={`mb-8 w-full border focus:border-black-500 ${
            !isValidEmail ? "border-red-500 bg-red-100" : "border-slate-300"
          } lg:w-[370px] h-[55px] p-4 rounded-xl placeholder-gray-300 placeholder-opacity-100`}
          type="email"
          placeholder="email@company.com"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <Button className="h-[55px]" size="medium" >
          Subscribe to monthly newsletter
        </Button>
      </form>
    </div>
  );
};

export default SubscribeInput;
