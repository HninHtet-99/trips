import { useEffect, useState } from "react";
import "./App.css";
import TripList from "./components/TripList";

function App() {
  let [data, setData] = useState("data");

  let myFunction = () => {
    setData("update data");
  };

  useEffect(()=>{
    myFunction();
    console.log('update data');
  },[myFunction])
  
  return (
    <>
      <h1>{data}</h1>
      <TripList />
    </>
  );
}
export default App;
