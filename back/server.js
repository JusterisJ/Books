const mongoose = require("mongoose");
const app = require("./app");

const DB = "mongodb+srv://Justeris:slaptas@cluster0.cv8ce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB connected");
  });

const port = 3005;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
