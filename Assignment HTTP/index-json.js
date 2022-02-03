const { json } = require("stream/consumers");
const { stringify } = require("querystring");

const onJSON = (request, respons) => {
  respons.writeHead(200, { "Content-Type": "application/json" });
  const dataJSON = {
    character: "mirror",
    color: "pink",
  };
  respons.end(JSON.stringify(dataJSON));
};

const PORT = 7777;

console.log(`Server is running in port: ${PORT}`);
Http.createServer(onJSON).listen(PORT);
