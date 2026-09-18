import express from "express";

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Salutations from the webway`);
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    body: `Currently I am learning how to create a space that can \nbe accessed from a URL. This small function will help with creating more \ncomplex organizations for a fully functional web application.`,
  });
});
//needed a commit

app.get("/current-classes", (req, res) => {
  res.send(`Currently enrolled in 5 courses:
  -CS326 Web Programming
  -History 151 US history since 1876
  -CS453 Computer Networks
  -CS305 Social Issues in computing
  -CS311 Intro to Algorithms`);
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use((req, res) => {
  res.status(404).send(`Page not found.`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
