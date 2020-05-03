import React, { useEffect, useState } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImg from "../src/images/covid.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState();

  async function handleCountryChange(value) {
    const data = await fetchData(value);
    setData(data);
    setCountry(value);
    console.log(data);
  }
  useEffect(() => {
    async function loadData() {
      const obj = await fetchData();
      setData(obj);
    }
    loadData();
  }, []);
  return (
    <div className={styles.container}>
      <img src={coronaImg} className={styles.img} alt="corona img" />

      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}
export default App;
