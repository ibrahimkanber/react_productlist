import React from 'react'
import {useHistory} from "react-router-dom"
function Card({user}) {
    const history=useHistory()
  /*   console.log(user.picture.medium)
    console.log(user.name)
    console.log(user.phone) */
    return (
        <div style={{backgroundColor:"yellow",width:300,height:400,margin:20}}>
            <img src={user.picture.medium} alt={user.name}/>
            <p>{user.name.first}  {user.name.last}</p>
            <p>{user.phone}</p>
            {/* <button onClick={()=>history.push(`/user/${user.login.uuid}`)}>Details</button> */}
            <button onClick={()=>history.push({
                pathname:`/user/${user.login.uuid}`,
                state:user
                
                
                })}>Details</button>
        </div>
    )
}

export default Card
