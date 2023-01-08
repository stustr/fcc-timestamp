import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <head>
        <title>Timestamp Microservice | freeCodeCamp.org</title>
        <link
          rel="shortcut icon"
          href="https://cdn.freecodecamp.org/universal/favicons/favicon-32x32.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link href="style.css" rel="stylesheet" type="text/css" />
      </head>

      <body>
        <h1>Timestamp Microservice</h1>
        <hr />
        <div class="container">
          <h3>Example Usage:</h3>
          <ul>
            <li>
              <a href="api/2015-12-25">[project url]/api/2015-12-25</a>
            </li>
            <li>
              <a href="api/1451001600000">[project url]/api/1451001600000</a>
            </li>
          </ul>

          <h3>Example Output:</h3>
          <p>
            <code>
              "unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
            </code>
          </p>
        </div>
        <div class="footer">
          <p>
            By <a href="https://www.freecodecamp.org/">freeCodeCamp.org</a>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
