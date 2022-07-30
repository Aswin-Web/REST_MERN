import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  let [data,setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
     axios.get("http://localhost:5000").then((res)=>{setData(res.data)})

    
  };
return <div>
   
   
</div>
 
}