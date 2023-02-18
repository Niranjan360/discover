import useFetch from "../useFetch";
import Navbar from "./Navbar";
import { useEffect, useState } from "react"
import { ScaleLoader } from "react-spinners";
import Userlist from "./Userlist";

const Home = () => {

    let [data , setData] =  useState(null);
    let [loading , setLoading] =  useState(true);

    useEffect(
        ()=>{
            setTimeout(()=>{
                fetch("https://jsonplaceholder.typicode.com/users")
                .then((res)=>{return res.json()})
                .then((data)=>{ setData(data); setLoading(false)})    
            } , 3000 )
        }
    , [])


    return ( 
    <div className="home-container">
        <Navbar/>

        {loading && <ScaleLoader color="crimson" height={55} width={6} className="loader" />}

        {data && <Userlist data={data}/>}


    </div> );
}
export default Home

