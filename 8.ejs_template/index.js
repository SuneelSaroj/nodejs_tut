const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "../", "public");
// console.log(publicPath);

// app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});
app.get("/dynamic", (_, resp) => {
  const user = {
    name: "sunil",
    mobile: 7068209338,
    skills: ["c++", "javascript", "python", "flutter"],
  };
  resp.render("dyna", { user });
});
app.get("/about", (_, resp) => {
  resp.render("about");
});

app.listen(5000);
