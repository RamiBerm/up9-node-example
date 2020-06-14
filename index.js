const express = require('express');

var up9Monitor = require("up9-node")({
    "up9Server": "up9.app",
    "serviceName": "your-service-name",
    "clientId": "your-client-id",
    "clientSecret": "your-client-secret",
    "hostnameOverrides": {"https://your-external-dns-address": "your-service-name"}
});
 
const app = express();

app.use(up9Monitor.express());  
app.use(express.json()); // support json encoded bodies

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("hello world!");
});

app.post('/', (req, res) => {
    res.status(200).send(req.body);
});

app.listen(port, () => console.log("server listening on port " + port));
