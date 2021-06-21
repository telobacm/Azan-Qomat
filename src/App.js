import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [petugas, setPetugas] = useState(["Fathur", "Izul", "Usamah", "Mujahid"]);
  const [tugas, setTugas] = useState(["Adzan Subuh", "Iqomat Subuh", "Adzan Zhuhur", "Iqomat Zhuhur", "Adzan Ashar", "Iqomat Ashar", "Adzan Maghrib", "Iqomat Maghrib", "Adzan Isya", "Iqomat Isya"]);

  const fungsi = () => {
    let man = [];
    for (let i = 0; i < 12; i++) {
      man.push(petugas[i % 4]);
    }
    setPetugas(man);
  };

  console.log(petugas);

  return (
    <div className="App">
      {petugas.map((item) => (
        <p>{item}</p>
      ))}
      <button onClick={fungsi}>BISMILLAH</button>
      <br />
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
