import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Query = () => {
  const [id, setId] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.data),
    enabled: !!id,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>{(error as Error).message}</p>;
  }

  return (
    <>
      <input
        type="number"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />

      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </>
  );
};

export default Query;
