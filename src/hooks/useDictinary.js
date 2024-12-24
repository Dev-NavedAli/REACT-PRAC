// import { useState, useEffect } from "react";

// const useDictionary = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/world");
//         const result = await response.json();
//         setData(result);
//         console.log(result); // Log the data
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []); // This will run only once when the component mounts

//   return data;
// };
// export default useDictionary;

import { useState,useEffect } from "react";
import axios from "axios"

const useDictionary = ()=>{
    const [data,setData] = useState({})
        useEffect(()=>{
            const fetchData = async ()=>{
                const response = await axios("https://api.dictionaryapi.dev/api/v2/entries/en/world")
                setData(response)
            }
            fetchData()
        },[])
    useEffect(()=>{
        console.log(data);
    },[data])
}

export default useDictionary ;