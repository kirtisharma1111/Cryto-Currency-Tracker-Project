import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useContext, useState } from "react"; // ✅ Add this line
import { CurrencyContext } from "../../context/CurrencyContext";

function CoinTable(){
    const {currency} = useContext(CurrencyContext);
    const [page,setPage] = useState(1);
   const { data, isLoading, isError, error } = useQuery({
   queryKey: ['coins', page, currency],  //based on page and currency changes occue
  queryFn: () => fetchCoinData(page, currency),
//   retry: 2,
//   retryDelay: 1000,
 gcTime: 1000 * 60 * 2, // In v5, cacheTime → gcTime
//   only give api to fresh data .
// if we have to go in previous, then api doesn't come again
staleTime: 1000* 60 * 2,
});

    if(isError){
        return <div>Error: {error.message}</div>
    }
    

   return(
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">{currency}
        <div className="w-full bg-yellow-400 text-black flex py-2 px-2 font-semibold items-center justify-center">
            {/* Header of the table */}
            <div className="basis-[35%]">
                Coin
            </div>
            <div className="basis-[25%]">
                Price
            </div>
            <div className="basis-[20%]">
                24 hour change
            </div>
            <div className="basis-[20%]">
                Market Cap
            </div>
        </div>
        <div className="flex flex-col w-[80vw] mx-auto">
            {isLoading && <div>Loading...</div>}
            {data && data.map((coin)=>{
                return(
                    <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
                        <div className="flex items-center justify-start gap-3 basis-[35%]">
                            <div className="w-[5rem] h-[5rem]">
                                <img src={coin.image} className="w-full h-full"/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                        <div className="text-xl">{coin.symbol}</div>
                                    </div>
                            </div>
                            <div>

                                </div>
                                <div className="basis-[25%]">
                                    {coin.current_price}
                                    </div>
                                    <div className="basis-[20%]">
                                    {coin.price_change_24h}
                                    </div>
                                    <div className="basis-[20%]">
                                    {coin.market_cap}
                                    </div>
                        </div>
                );
            })}
        </div>
        <div className="flex gap-4 justify-center items-center">
            <button disabled={page===1} onClick={()=> setPage(page-1)} className="btn btn-primary btn-wide text-white text-2xl">Prev</button>
            <button onClick={()=> setPage(page+1)} className="btn  btn-secondary btn-wide text-white text-2xl">Next</button>
        </div>
    </div>
   );
}
export default CoinTable;