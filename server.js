const { response, request } = require("express");
const express = require("express");

const server = express();
const port = process.env.PORT || 3000;
const theAnswer = "pizza";

server.get("/guess/:word", (request, response) => {
  const userword = request.params.word;
  let answer = [];
  for (let i = 0; i < userword.length; i++) {
    const ch = userword[i];
    if (ch == theAnswer) {
      answer.push(1);
    } else if (theAnswer.includes(ch)) {
      answer.push(0);
    } else {
      answer.push(-1);
    }
  }
  response.json(answer);
});

server.use(express.static("public"));

server.get("hello/:name", (request, response) => {
  response.send("goodbye" + request.params.name);
});

server.get("/hello/", (request, response) => {
  response.send("goodbye ahmad");
});

server.get("/", (request, response) => {
  response.send("hello ahmad");
});

server.listen(port, () => {
  console.log("server is running on port 3000");
});
