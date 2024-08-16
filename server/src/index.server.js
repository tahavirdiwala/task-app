require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use("/api", authRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("error =>", error);
  }
};
start();
