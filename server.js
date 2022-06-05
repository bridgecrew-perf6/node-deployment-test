const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL.replace("<PASSWORD>", process.env.PASSWORD))
  .then(console.log("Connected to database"));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port... ${port}`));
