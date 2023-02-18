
const Userlist = ({data}) => {

    return ( 
        <div className="users-list">
            {
                data.map((user)=>{
                    return(
                        <div className="user" key={user.id}>
                            <img src={`https://avatars.dicebear.com/v2/avataaars/%7b%7b${user.name}%7d%7d.svg?options%5bmood%5d%5b%5d=happy`} alt="user pic" />
                            <h3>{user.name}</h3>
                            <p><i class='bx bx-envelope'></i> {user.email}</p>
                            <p><i class='bx bx-phone' ></i> {user.phone}</p>
                            <p><i class='bx bx-globe'></i> {user.website}</p>
                            <div className="actions">
                                <button><i class='bx bx-heart' ></i></button>
                                <button><i class='bx bx-edit-alt' ></i></button>
                                <button><i class='bx bx-message-square-x'></i></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Userlist