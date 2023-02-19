
import { useEffect, useState } from "react"
import { ScaleLoader } from "react-spinners";
import Userlist from "./Userlist";

const Home = () => {

    let [data , setData] =  useState(null);
    let [loading , setLoading] =  useState(true);
    let [edited , setEdited] =  useState(0);


    useEffect(
        ()=>{
            if(localStorage.getItem("userlist")===null)
            {
                setTimeout(()=>{
                    fetch("https://jsonplaceholder.typicode.com/users")
                        .then((res)=>{return res.json()})
                        .then((data)=>{ 
                            setData(data); 
                            setLoading(false);
                            data = JSON.stringify(data.map((user)=>{ return {...user ,liked : false }}));
                            localStorage.setItem("userlist", data)})
                } , 3000 )
            }
            else
            {
                setData(JSON.parse(localStorage.getItem("userlist")));
                setLoading(false);         
            }
        }
    , [edited])


    return ( 
    <div className="home-container">

        {loading && <ScaleLoader color="crimson" height={55} width={6} className="loader" />}

        {data && <Userlist data={data} edited={edited} setEdited={setEdited}/>}


    </div> );
}
export default Home

