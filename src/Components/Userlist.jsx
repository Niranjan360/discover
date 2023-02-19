
const Userlist = ({data ,edited,setEdited}) => {

    let handleLiked = (id , value)=>{
        let userlist = JSON.parse(localStorage.getItem("userlist"));
        let ind = userlist.findIndex((user)=>{ return user.id===id});
        userlist[ind].liked = value;
        userlist = JSON.stringify(userlist)
        localStorage.setItem("userlist" , userlist);
        console.log(JSON.parse(localStorage.getItem("userlist")));
        setEdited(edited+1);
    }


    return ( 
        <div className="users-list">
            {
                data.map((user)=>{
                    return(
                        <div className="user" key={user.id}>
                            <img src={`https://avatars.dicebear.com/v2/avataaars/%7b%7b${user.name}%7d%7d.svg?options%5bmood%5d%5b%5d=happy`} alt="user pic" />
                            <h3>{user.name}</h3>
                            <p><i className='bx bx-envelope'></i> {user.email}</p>
                            <p><i className='bx bx-phone' ></i> {user.phone}</p>
                            <p><i className='bx bx-globe'></i> {user.website}</p>
                            <div className="actions">
                                {!user.liked && <button onClick={()=>{handleLiked(user.id , true)}}><i className='bx bx-heart' ></i></button>}
                                {user.liked  && <button onClick={()=>{handleLiked(user.id , false)}}><i className='bx bxs-heart' style={{color:"red"}}></i></button>}
                                <button><i className='bx bx-edit-alt' ></i></button>
                                <button><i className='bx bx-message-square-x'></i></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Userlist