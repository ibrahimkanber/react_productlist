import React from 'react'
import {useParams} from "react-router-dom"
export default function SignIn() {
    const params=useParams()
    console.log(params)
    return (
        <div style={{backgroundColor:"yellow",display:"flex",color:"tomato",justifyContent:"center",height:300}}>
            Sign In
        </div>
    )
}
