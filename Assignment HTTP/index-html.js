const Http = require("http");
const fs = require("fs");
const { stringify } = require("querystring");

const onRequest = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", null, (err, data) => {
    if (err) {
      response.writeHead(400);
      response.write("file not found");
    } else {
      response.write(data);
    }
    response.end();
  });
};

const PORT = 7777;

console.log(`Server is running in port: ${PORT}`);
Http.createServer(onRequest).listen(PORT);
