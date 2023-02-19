import { useEffect, useState } from "react"
import { ScaleLoader } from "react-spinners";
import Userlist from "./Userlist";

const Favorites = () => {

    let [data , setData] =  useState(null);
    let [loading , setLoading] =  useState(true);
    let [edited , setEdited] =  useState(0);


    useEffect(
        ()=>{
            setTimeout(()=>{
                let userlist = JSON.parse(localStorage.getItem("userlist"));
                userlist = userlist.filter((user)=>{return user.liked==true});
                setData(userlist);
                setLoading(false);
            } , 2000)
        }
    , [edited])

    return ( 
    <div>
        {loading && <ScaleLoader color="crimson" height={55} width={6} className="loader" />}

        {data && <Userlist data={data} edited={edited} setEdited={setEdited}/>}

        {data && data.length===0 && <h1> No users in favorites list  </h1>}


    </div> );
}

export default Favorites;