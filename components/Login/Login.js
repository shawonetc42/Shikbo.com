import React from 'react';

function Login() {
  return (
    <span className="shadow-2xl bg-white flex flex-col max-w-[559px] p-12 rounded-xl mx-auto lg:mx-auto max-md:px-5">
     <div className='flex justify-center space-x-2'>
     <img
        loading="lazy"
        srcSet="/logo.png"
        className="aspect-w-16 aspect-h-10 object-contain w-[78px] overflow-hidden self-center max-w-full"
      />
      <div className='mt-5'>পি.এস.আর.কে <br/> প্রভাতি স্বেচ্ছায় রক্তদান কেন্দ্র </div>
     </div>
      
      <div className="justify-center text-neutral-500 text-base leading-6 capitalize self-stretch mt-11 max-md:max-w-full max-md:mt-10">
        Email
      </div>
      
        <input type="email" placeholder='Enter Your Email' className='justify-center text-neutral-400 text-base whitespace-nowrap border bg-stone-50 self-stretch mt-3.5 pl-5 pr-16 py-5 rounded-lg border-solid border-neutral-300 items-start max-md:max-w-full max-md:px-5'/>
      
      <span className="self-stretch flex justify-between gap-5 mt-7 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="justify-center text-neutral-500 text-base leading-6 capitalize">
          Password
        </div>
        <div className="justify-center text-emerald-700 text-base leading-6">
         <a href="/forget"> Forgot password?</a>
        </div>
      </span>
      <input type="password" placeholder='Enter Your Password' className='justify-center text-neutral-400 text-base whitespace-nowrap border bg-stone-50 self-stretch mt-3.5 pl-5 pr-16 py-5 rounded-lg border-solid border-neutral-300 items-start max-md:max-w-full max-md:px-5'/>
      
      <span className="justify-center text-white text-center text-base font-bold leading-6 capitalize whitespace-nowrap items-stretch bg-[#D02828] mt-6 px-8 py-5 rounded-xl self-start max-md:px-5">
        Login
      </span>
      <div className="justify-center text-emerald-700 text-center text-sm leading-5 tracking-wide self-center whitespace-nowrap mt-10">
        Don’t have an account?{" "}
        <a href='/registion' className="text-emerald-700 font-bold">Register</a>
      </div>
      <div className="justify-center items-center border self-stretch flex flex-col mt-8 px-16 py-3.5 rounded-md border-solid border-neutral-400 border-opacity-40 max-md:max-w-full max-md:px-5">
        <span className="flex items-stretch gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="justify-center text-stone-500 text-center text-sm font-medium leading-5 self-center grow whitespace-nowrap my-auto">
            Login with Google
          </div>
        </span>
      </div>
    </span>
  );
}

export default Login;
