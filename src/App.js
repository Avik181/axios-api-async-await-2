import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const baseURL = "https://api.chucknorris.io/jokes/random";

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://api.chucknorris.io/jokes/random");
      setName(res.data.value);
    }
    getData();
  }, []);

  const show = () => {
    setNum(name);
  };
  return (
    <div className="App">
      <button onClick={show}> click </button>
      <h1>{num}</h1>
    </div>
  );
}
