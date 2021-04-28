import React from 'react'
import {useLocation,useParams} from "react-router-dom"

function UserDetails() {
    const params=useParams()
    console.log(params)
    const location=useLocation()
    console.log(location)
    const user=location.state
    return (
        <div>
            <p>{user.nat}</p>
        </div>
    )
}

export default UserDetails
