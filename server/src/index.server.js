require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task",
      version: "1.0.0",
      description: "Given Task Assesment",
    },
    servers: [{ url: "http://localhost:5000/api" }],
  },

  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(cors());
app.use(express.json());
app.use("/api", authRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

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
