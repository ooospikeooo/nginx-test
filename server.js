const express = require("express");
const https = require("https");
const fs = require("node:fs");

const app = express();

const options = {
    key: fs.readFileSync("./ssh/server.key.insecure"),
    cert: fs.readFileSync("./ssh/server.crt"),
};

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

https.createServer(options, app).listen(PORT, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${PORT} 🛡️
    ################################################
  `);
}).on('error', err => {
    console.error(err);
    process.exit(1);
});

// const server = http.createServer((req, res) => {
//     const urlPath = req.url;
//     if (urlPath === "/overview") {
//         res.end('Welcome to the "overview page" of the nginX project');
//     } else if (urlPath === "/api") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(
//             JSON.stringify({
//                 product_id: "xyz12u3",
//                 product_name: "NginX injector",
//             })
//         );
//     } else {
//         res.end("Successfully started a server");
//     }
// });

// server.listen(3000, "host.docker.internal", () => {
//     console.log("Listening for request");
// });

// server.listen(3000, () => {
//     console.log("Listening for request");
// });