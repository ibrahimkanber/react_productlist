import React,{useEffect,useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import axios from "axios"


/* body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
id: 1
title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
userId: 1
 */
export default function Main() {
    const [postList,setPostList]=useState([])

   

    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setPostList(res.data))
    }

    useEffect(()=>{
        fetchData()
    },[])

    const history=useHistory()
    return (
        <div style={{backgroundColor:"turquoise",display:"flex",color:"tomato",height:300}}>
            {/* <Link to="/signin/5/9">SignIn</Link>
            <button onClick={()=>history.push("/signin")}>Button</button> */}
            
      {/*     <p>
              {postList.length>0 ? postList[0].body : null}
              {postList.length && postList[0].body }
              { postList[0]?.body }
          </p> */}

          {
              postList.map(post=><p>{post.id}</p>)
          }
        </div>
    )
}
