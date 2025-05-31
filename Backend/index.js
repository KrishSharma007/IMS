const connectToMongo = require("./db");
connectToMongo();

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const cors = require("cors");
const router = require("./Routes/router");

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
