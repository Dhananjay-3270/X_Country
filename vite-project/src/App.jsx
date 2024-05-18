import React from "react";
import Home from "./Home";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
export const BACK_ENDPOINT = "https://restcountries.com/v3.1/all";
function App() {
  const getdata = async () => {
    const url = BACK_ENDPOINT;
    try {
      const response = await axios.get(url);

      Setdata(response.data);
      setFilter(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const [data, Setdata] = useState([]);
  const[filter,setFilter] = useState([])
  useEffect(() => {
    getdata();
  }, []);
  const handlechange = (event) => {
    let search = event.target.value;
    console.log(search);
    let filters = data.filter((ele)=>ele.name.common.includes(search)) ;

    setFilter(filters);
  };
  return (
    <>
      <React.StrictMode>
        <div>
          <input onChange={handlechange} type="search" />
        </div>
        <Home data={filter} />
      </React.StrictMode>
    </>
  );
}

export default App;
