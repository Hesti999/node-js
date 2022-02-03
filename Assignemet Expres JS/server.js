const Express = require("express");
const App = Express();
const PORT = 3000;

App.set("view engine", "ejs");
// untuk kirim status
App.listen(PORT, function () {
  console.log(`Server is running ${PORT}`);
});

// link/route/endpoint/path dalam web
// didalam method hanya bisa (get)
// App.get("/get/product", (req, res) => {
//   res.send("ini adalah page product");
// });

App.use(Express.static("public"));

App.get("/", (req, res) => {
  res.render("index");
});

App.get("/product", (req, res) => {
  res.render("product");
});

App.get("/detail", (req, res) => {
  res.render("detail");
});
