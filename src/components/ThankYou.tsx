'use client'
import DismissButton from "@/components/DismissButton";
import { useEffect , useState} from "react";

function ThankYou({}) {
    const [email, setEmail] = useState("");
     useEffect(() => {
        setEmail( localStorage.getItem("email") ||"")
      }, [])
    return (
    <main className=" lg:bg-[#333a4b]  text-black flex justify-center items-center h-screen  ]">
      <div className="bg-white container h-screen lg:max-w-[450px] lg:h-[460px] lg:px-6 rounded-3xl">
        <div className="sm:col-span-12 md:col-span-3 pl-8 pr-5 md:px-6 md:max-w-[780px] justify-center  mt-48 lg:mt-9 md:px-6 ">
        <div className="mb-4 ">
          <img src="./icon-success.svg" alt="picture" className=" " />
        </div>
        <div className=' mb-5'>
          <p className='text-[#333a4b] font-bold text-[40px] leading-none'>Thanks for subscribing!</p>
        </div>
        <div className="md:mb-12 mb-48">
            <p>
                A confirmation email has been sent to  <strong>{email}</strong> . Please open it and click the button inside to confirm your subscription.
            </p>
        </div>
        <div className=" flex justify-center">
            <DismissButton></DismissButton>

        </div>

        </div>
        </div>
     </main>
    )
}

export default ThankYou;