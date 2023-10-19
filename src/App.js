import React, { useState } from "react";
import Accordion from "./Accordion";
import logo from "./mark.jpg";
import "./App.css";

const App = () => {
  const [isiCircle, setIsiCircle] = useState(true);
  const [isiGambar, setGambar] = useState(true);

  const toggleShape = () => {
    setIsiCircle(!isiCircle);
  };

  const toggleGambar = () => {
    setGambar(!isiGambar);
  };

  const imageClassName = isiCircle ? "circle" : "square";

  return (
    <div className="App">
      <header className="App-header">
        <div className="fotopalingatas">
          <img
            src={isiGambar ? logo : ""}
            className={imageClassName}
            alt="logo"
          />
          <div className="tulisandibawahfoto">
            <ul>
              <button className="button" onClick={toggleGambar}>
                Ubah
              </button>
              <li>Gender: Male</li>
              <li>Carer: Mahasiswa</li>
            </ul>
          </div>
        </div>
        <div className="tulisandisampingfoto">
          <div>
            <h2>Rino Gabriel Pandelaki</h2>
            <hr />
            <div>
              <Accordion
                title="Angkatan"
                content="2022"
              />
               <Accordion
                title="Jurusan"
                content="Informatika"
              />
              <Accordion
                title="Hobby"
                content="Tidur"
              />
              <Accordion
               title="Jalur Sukses"
               content="Start Up"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="right-bottom">
        <div className="deskripsi">
          <hr />
          <p>Riwayat Organisasi :</p>
          <ul>
            <li>Nplc</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
