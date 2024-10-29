import React from "react";

function getTime() {
  //inctime(new Date().toLocaleTimeString());
}

function App() {
  var [time, inctime] = React.useState(new Date().toLocaleTimeString());

  function getTime() {
    inctime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setInterval(getTime, 100)}>Get Time</button>
    </div>
  );
}

export default App;
