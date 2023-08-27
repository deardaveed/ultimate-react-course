import React from 'react';
// React v18
import ReactDOM from 'react-dom/client';
// older way
// import ReactDOM from "react-dom";

function App() {
  return <h1>Hello React</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// older way
// ReactDOM.render(<App />, document.getElementById("root"));
