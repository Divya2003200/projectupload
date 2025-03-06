import { Button, Color } from "@chakra-ui/react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

const MutateEx=()=>{
    interface postdata{
        title:string,
        body:string
    }
    const[post,setPost]=useState({title:'',body:''})

    const postData=(post:postdata)=>{
        return axios.post(`https://jsonplaceholder.typicode.com/posts`,post)
    }
    const {mutate,isPending}=useMutation({
    mutationFn:postData,
    onSuccess: () => {
        alert("Post created successfully!");
      },
    })
   
    return(
        <>
      
        <input type="text" placeholder="title"
        onChange={(e)=>{setPost((prev) => ({ ...prev, title: e.target.value }));
    }}
        />
    
        <input type="text" placeholder="body"
          onChange={(e)=>{setPost((prev) => ({ ...prev, body: e.target.value }));
        }} />

<Button onClick={() => mutate(post)} loading={isPending} colorScheme="blue">button
        {isPending ? "Submitting..." : "Submit"}
      </Button>
        </>
     
    )
}
export default MutateEx