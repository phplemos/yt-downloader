import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
