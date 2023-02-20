import { useRef, useState } from "react";
import Overlay from "react-overlay-component";

const Userlist = ({data ,edited,setEdited}) => {

    const [editingObjId, seteditingObjId] = useState(0);
    let username = useRef();
    let email = useRef();
    let phone = useRef();
    let website = useRef();


    const [isOpen, setOverlay] = useState(false);
    const configs = {animate: false};

    let handleLiked = (id , value)=>{
        let userlist = JSON.parse(localStorage.getItem("userlist"));
        let ind = userlist.findIndex((user)=>{ return user.id===id});
        userlist[ind].liked = value;
        userlist = JSON.stringify(userlist)
        localStorage.setItem("userlist" , userlist);
        console.log(JSON.parse(localStorage.getItem("userlist")));
        setEdited(edited+1);
    }

    let handleDeleted = (id)=>{
        let userlist = JSON.parse(localStorage.getItem("userlist"));
        let ind = userlist.findIndex((user)=>{ return user.id===id});
        userlist.splice(ind,1);
        userlist = JSON.stringify(userlist)
        localStorage.setItem("userlist" , userlist);
        setEdited(edited+1);
    }

    let handleOverlay = (user)=>{
        username.current.value = user.name;
        email.current.value = user.email;
        phone.current.value = user.phone;
        website.current.value = user.website;
        setOverlay(true);
        seteditingObjId(user.id);
    }

    let handleEdit = ()=>{
        let userlist = JSON.parse(localStorage.getItem("userlist"));
        let ind = userlist.findIndex((user)=>{ return user.id===editingObjId});
        userlist[ind] = {...userlist[ind] , 
                                    name :username.current.value,
                                    email :email.current.value,
                                    phone :phone.current.value,
                                    website :website.current.value,
                                }
        localStorage.setItem("userlist" , JSON.stringify(userlist));
        setEdited(edited+1);
        setOverlay(false);
    }

    return ( 
        <div className="users-list">
            {
                data.map((user)=>{
                    return(
                        <div className="user" key={user.id} >
                            <img src={`https://avatars.dicebear.com/v2/avataaars/%7b%7b${user.name}%7d%7d.svg?options%5bmood%5d%5b%5d=happy`} alt="user pic" />
                            <h3>{user.name}</h3>
                            <p><i className='bx bx-envelope'></i> {user.email}</p>
                            <p><i className='bx bx-phone' ></i> {user.phone}</p>
                            <p><i className='bx bx-globe'></i> {user.website}</p>
                            <div className="actions">
                                {!user.liked && <button onClick={()=>{handleLiked(user.id , true)}}><i className='bx bx-heart' ></i></button>}
                                {user.liked  && <button onClick={()=>{handleLiked(user.id , false)}}><i className='bx bxs-heart' style={{color:"red"}}></i></button>}
                                <button onClick={()=>{handleOverlay(user)}}><i className='bx bx-edit-alt' ></i></button>
                                <button onClick={()=>{handleDeleted(user.id)}}><i className='bx bx-message-square-x'></i></button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="edit-cont">
                <Overlay configs={configs} isOpen={isOpen} closeOverlay={()=>{setOverlay(false)}}>
                    <h2>User details</h2>
                    <input type="text" ref={username}/>
                    <input type="email" ref={email}/>
                    <input type="tel" ref={phone}/>
                    <input type="url" ref={website}/>
                    <button onClick={()=>{handleEdit()}}>Edit</button>
                </Overlay>
            </div>
            
        </div>
    );
}
export default Userlist