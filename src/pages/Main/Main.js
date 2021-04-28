import React,{useEffect,useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import axios from "axios"
import Card from "../../components/Card"

//veri cek state e at
//state deki veriyi sergile

export default function Main() {
    
    const [userlist,setUserList]=useState([])
   
    const fetchData=()=>{
        axios.get("https://randomuser.me/api/?results=50").then(res=>setUserList(res.data.results))
    }

    useEffect(() => {
        fetchData()
    }, [])
  
    
    const history=useHistory()
    return (
        <div style={{backgroundColor:"white",color:"black",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

{/*             {
                postlist.length>0 ? 
                postlist.map(post=><p>{post.gender}</p>)
                :
                null
            } */}

           { userlist?.map(user=><Card user={user} key={user.login.uuid}/>)}

        </div>
    )
}
