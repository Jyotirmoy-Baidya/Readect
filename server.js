const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

mongoose
  .connect(
    "mongodb+srv://moitreyo:codinghabits365@cluster1.oivomfg.mongodb.net/readerInsect?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("db connection successful");
  });

const port = process.env.PORT;
console.log(typeof process.env.PORT);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
