const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Title",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];
  res.render("articles/index", { articles });
});

app.use("/articles", articleRouter);

app.listen(8080);
