import { useEffect, useState } from "react"

let useFetch = ( req )=>
{
    let [data , setData] =  useState(null);
    let [loading , setLoading] =  useState(true);

    useEffect(
        ()=>{
            setTimeout(()=>{
                fetch(req)
                .then((res)=>{return res.json()})
                .then((data)=>{ setData(data); setLoading(false)})    
            } , 2000 )
        }
    , [])

    return {data , loading}
}


export default useFetch;