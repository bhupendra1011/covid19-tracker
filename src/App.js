import React, { useEffect, useState } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function loadData() {
      const obj = await fetchData();
      setData(obj);
    }
    loadData();
  }, []);
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}
export default App;
