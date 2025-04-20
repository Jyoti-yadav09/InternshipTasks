import React, {useState, useEffect} from "react";

function App()
{
   const[showCounter, setShowCounter]=useState(false);
   const[count, setCount]=useState(0);

   useEffect(()=>
  {
     const timer=setTimeout(()=>
    {
       setShowCounter(true);
    }, 2000);

    return()=>clearTimeout(timer);
  }, []);

   if(!showCounter)
   {
     return(
      <div className="h-screen bg-orange-200 text-white flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Simple Counter</h1>
        <p className="text-lg md:text-2xl mt-4  max-w-xl">A simple tool for counting things and keeping track of numbers.</p>
      </div>
     );
   }

   return (
        <div className="h-screen bg-orange-200 text-white flex flex-col justify-center items-center relative">
          <button onClick={()=>setCount(count-1) } className="absolute left-6 md:left-20 text-5xl border border-white rounded-full w-16 h-16 flex items-center justify-center">-</button>
          <h1 className="text-[8rem] md:text-[9rem] font-bold">{count}</h1>
          <button onClick={()=>setCount(count+1)} className="absolute right-6 md:right-20 text-5xl border border-white rounded-full w-16 h-16 flex items-center justify-center ">+</button>
        </div>

   );


}

 export default App;