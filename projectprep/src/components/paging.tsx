import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";


const Page=()=>{

    const[page,setPage]=useState(0)
    

    const  onpage=async ()=>{
        return  await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page}`).then(res=>res.data)
    }

    const {data,isLoading,error}=useQuery({
        queryKey:["posts",page],
        queryFn:onpage,
        enabled:!!page
    })
if (isLoading) {
    <p>loading...</p>
}
    return(

        <>
      <input type="number" placeholder="enter page no" 
      onChange={(e)=>{
        setPage(Number(e.target.value))
      }}
      />
           {data?.map((post: any) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
        </>
    )
}
export default Page