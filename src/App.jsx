import { useEffect, useState } from "react";
import "./styles/styles.css";
import state from "./store";
import Main from "./components/Main";
import SingleTimeline from "./components/SingleTimeline";
import AllWomens from "./components/AllWomens";
import { useSnapshot } from "valtio";

function App() {
  const snap = useSnapshot(state);

  useEffect(() => {
    // Function to load the CSV file
    const loadCsvFile = async () => {
      try {
        const response = await fetch("./assets/womensdata.csv");
        let content = await response.text();
        content = csvToJson(content);
        state.womensData = content;
        console.log(content);
        // You can now process or display the CSV content as needed
      } catch (error) {
        console.error("Error loading CSV file:", error);
      }
    };

    // Call the function when the component mounts
    loadCsvFile();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const csvToJson = (csv) => {
    const lines = csv.split("\r\n");
    const headers = lines[0].split(",");

    const result = lines.slice(1).map((line) => {
      const data = line.split(",");
      return headers.reduce((obj, header, index) => {
        obj[header] = data[index];
        return obj;
      }, {});
    });

    return result;
  };

  return (
    <div className="main">
      <Main />
      <AllWomens />
      <SingleTimeline />
    </div>
  );
}

export default App;
