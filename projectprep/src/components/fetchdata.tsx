import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState<string>('');
  const [id, setId] = useState<number>(1); 

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setData(response.data.title );  
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <>
      <label htmlFor="input">Enter ID: </label>
      <input
        type="number"
        id="input"
        value={id}
        onChange={(e) => setId(Number(e.target.value))} 
      />
      <button onClick={fetchData}>Submit</button>
      <h1>{data}</h1>
    </>
  );
};

export default FetchData;
