"use client"

import { ITEMS_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({page, count}:{page:number, count:number}) => {
  console.log({page,count});
   const router = useRouter();
   const hasPrev = page > 1;
   const hasNext = page * ITEMS_PER_PAGE < count;

  const changePage = (newPage:number) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", newPage.toString());
   router.push(`${window.location.pathname}?${searchParams.toString()}`)
  }
  return (
       <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled={!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page - 1)}
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {
          Array.from({length: Math.ceil(count/ITEMS_PER_PAGE)}, (_,i)=>i+1).map((pNum)=>(
            console.log({pNum}),
            <button 
              key={pNum}
              className={`px-2 rounded-sm ${pNum===page ? "bg-agSky":" "}`}
              onClick={()=>changePage(pNum)}
            >
              {pNum}
            </button>
          ))
        }
        {/* <button className="px-2 rounded-sm bg-lamaSky">1</button>
        <button className="px-2 rounded-sm ">2</button>
        <button className="px-2 rounded-sm ">3</button>
        ...
        <button className="px-2 rounded-sm ">10</button> */}
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page + 1)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination