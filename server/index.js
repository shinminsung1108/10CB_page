const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");


// Express
const app = express();

// Dotenv
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB 연결에 성공하였습니다"))
  .catch((error) => console.log(error.message));

app.listen(process.env.PORT, () => {
  console.log(`포트 : ${process.env.PORT} , 서버 연결에 성공하였습니다`);
});
