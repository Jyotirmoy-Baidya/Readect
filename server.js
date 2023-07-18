const app = require("./app");
const mongoose = require("mongoose");

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

app.listen(3737, () => {
  console.log("listening on port 3737");
});
