import "./App.css";
import React, { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import XMLData from "./products1.xml";
import FileReaderComponnent from "./components/FileReader";

const URL = "https://kamko01.smallhost.pl/products1.xml";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
};

function App() {
  const [fiele, setFile] = useState([]);

  const showFile = async (e) => {
    e.preventDefault();
    console.log("1", e.target.files[0]);
    const reader = new FileReader();
    reader.onload = async (e) => {
      console.log("1 e", e);
      console.log("1 e target", e.target);
      console.log("1 e res", e.target.result);
      // console.log("2", e.target.result);
      const text = e.target.result;
      setFile(text);
      console.log("3", new XMLParser().parseFromString(text));
    };
    reader.readAsText(e.target.files[0]);
  };

  // useEffect(() => {
  //   fetch(URL, { mode: "no-cors", method: "GET" })
  //     .then((res) => {
  //       console.log(res);
  //       return res.text();
  //     })
  //     .then((data) => {
  //       var xml = new XMLParser().parseFromString(data);
  //       console.log(xml);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="App">
      <FileReaderComponnent />
    </div>
  );
}

export default App;
