import SubscribeInput from '@/components/SubscribeInput'


export default function Home() {
  return (
    <main className=" md:bg-[#333a4b]  text-black flex justify-center items-center md:h-screen ]">
    <div className="bg-white container md:max-w-[850px] md:h-[560px] md:px-4 rounded-3xl">
        <div className='grid md:grid-cols-6  sm:grid-cols-1 gap-y-6'>
        <div className=" hidden  md:col-span-3  ml-7 mt-4 md:order-last md:block">
          <img src="./illustration-sign-up-desktop.svg" alt="picture" className="w-full  h-[530px] object-cover rounded-xl" />
        </div>
        <div className="block md:col-span-3 md:order-last md:hidden">
          <img src="./illustration-sign-up-mobile.svg" alt="picture" className=" w-full h-[300px] object-cover rounded-b-2xl" />
        </div>

        <div className='sm:col-span-12 md:col-span-3 pl-8 pr-5 md:px-6 md:max-w-[780px] '>
          <div className='md:mt-12 mb-2'>
          <p className=' font-bold text-[45px]'>Stay updated!</p>
          </div>
          <div  className='mb-4 '>
          <p className=' font-semibold text-[15px]'>Join 60,000+ product managers recieving monthly updates on:</p>
          </div>
          <div className='flex flex-row  mb-6 md:mb-1' >
          <img src="./icon-list.svg" alt="icon " className='pr-4 sm:mb-8 mb-4' />
          <p className='font-semibold text-[15px] '>Product discovery and building what matters</p>

          </div>
          <div className='flex flex-row mb-6 md:mb-1'>
          <img src="./icon-list.svg" alt="icon" className=' pr-4 sm:mb-6 mb-4' />
          <p className=' font-semibold text-[15px]'>Measuring to ensure updates are a success</p>

          </div>
          <div className='flex flex-row mb-5'>
          <img src="./icon-list.svg" alt="icon" className=' pr-4 sm:my-0 mb-4'  />
          <p className=' font-semibold text-[15px]'>And much more!</p>
          </div>
          <div className='mb-8'>
          <SubscribeInput ></SubscribeInput>
        </div>   
        </div>

        
      </div>
      

    </div>
    </main>
  )
}
