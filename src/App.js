import React, { useEffect } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  useEffect(() => {
    async function loadData() {
      const obj = await fetchData();
      console.log(obj);
    }
    loadData();
  }, []);
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}
export default App;
