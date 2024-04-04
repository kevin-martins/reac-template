// import React from 'react'

// const Navigation = () => {
//   return (
//     <nav class="fixed top-0 z-50 w-full px-6 text-white 
//       transition-all duration-300 ease-out lg:px-12
//       bg-neutral-950/0 py-6 shadow-none">
//         <div class="mx-auto flex max-w-7xl items-center justify-between">
//           <div class="flex items-center gap-2">
//             <span class="text-2xl font-bold" style="color:white">Placeholder</span>
//             <svg width="50" height="39" viewBox="0 0 50 39" fill="white" xmlns="http://www.w3.org/2000/svg" class="w-10"><path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stopColor="white"></path>
//             <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stopColor="white"></path>
//             </svg>
//             </div>
//             <div class="hidden gap-6 lg:flex">
//               <div class="flex items-center gap-6">
//                 <div class="relative h-fit w-fit">
//                   <a href="#" class="relative">About us<span style={{ transform: "scaleX(0)" }} class="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out">
//                     </span></a></div><div class="relative h-fit w-fit">
//                       <a href="#" class="relative">Pricing<span style={{ transform: "scaleX(0)" }} class="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out">
//                         </span>
//                         </a>
//                         </div>
//                         <div class="relative h-fit w-fit">
//                           <a href="#" class="relative">Careers<span style={{ transform: "scaleX(1)" }} class="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"></span>
//                           </a><div class="absolute left-1/2 top-12 bg-white text-black" style="opacity: 1; transform: translateY(0px) translateX(-50%) translateZ(0px);"><div class="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div><div class="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div><div class="grid w-full grid-cols-12 shadow-xl lg:w-[750px]"><div class="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4"><div class="mb-6"><h2 class="mb-2 text-xl font-semibold text-white">Careers</h2><p class="text-sm text-indigo-100">Placeholder was rated a top place to work by Placeholder.</p></div><a href="#" class="flex items-center gap-1 text-xs text-indigo-200 hover:underline">Careers site <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div><div class="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3"><div class="space-y-3"><h3 class="font-semibold">Business</h3><a href="#" class="block text-sm hover:underline">Marketing</a><a href="#" class="block text-sm hover:underline">Finance</a><a href="#" class="block text-sm hover:underline">Legal</a><a href="#" class="block text-sm hover:underline">Sales</a></div><div class="space-y-3"><h3 class="font-semibold">Engineering</h3><a href="#" class="block text-sm hover:underline">Full stack</a><a href="#" class="block text-sm hover:underline">Dev ops</a><a href="#" class="block text-sm hover:underline">QA</a><a href="#" class="block text-sm hover:underline">Data</a><a href="#" class="block text-sm hover:underline">Machine learning</a><a href="#" class="block text-sm hover:underline">Management</a></div><div class="space-y-3"><h3 class="font-semibold">More</h3><a href="#" class="block text-sm hover:underline">Support</a><a href="#" class="block text-sm hover:underline">Office</a><a href="#" class="block text-sm hover:underline">Other</a></div></div></div></div></div><div class="relative h-fit w-fit"><a href="#" class="relative">Documentation<span style="transform:scaleX(0)" class="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"></span></a></div></div><div class="flex items-center gap-3"><button class="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg><span>Sign in</span></button><button class="rounded-lg border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">Schedule a Demo</button></div></div><div class="block lg:hidden"><button class="block text-3xl"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button></div></div>
//       </nav>
//   )
// }

// export default Navigation
import React from 'react'

const Navigation = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navigation
