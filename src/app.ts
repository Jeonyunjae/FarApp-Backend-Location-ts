const locationRoutes = require('./route/routes');
const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req:any, res:any) => {
  res.send("Hello World!");
});

app.use("/api/v1/location", locationRoutes);

app.listen(port, () =>
  console.log(`🚀Server is running on http://localhost:${port} ✅`)
);