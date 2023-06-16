import { useEffect, useState } from "react";
import "./app.scss";
import parsedData from "./common/dataSource";
function App() {
  const [data, setData] = useState({
    results:[];
  });

  const { results } = data;

  useEffect(() => {
    console.log("fetching data");
    setData(parsedData);
  }, []);
  return (
    <div id="app">
      <h1>List of users</h1>

      <div className="container">
        <div className="users row"></div>

        {results?.map((item, index) => {
          return <h1 key={`item-${index}`}>Hello</h1>;
        })}
        <div className="col-2 user">
          <img />
          <h3>name</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
