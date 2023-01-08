import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDomServer from "react-dom/server";

import App from "./src/App";

const app = express();

app.use("/", (req, res, next) => {
  fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error occurred");
    }
    return res.send(
      data.replace(
        '<div> id="root"</div>',
        `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
      )
    );
  });
});
