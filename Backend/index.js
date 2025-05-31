const connectToMongo = require("./db");
connectToMongo();

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const cors = require("cors");
const router = require("./Routes/router");

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
