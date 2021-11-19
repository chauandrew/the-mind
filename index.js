const express = require("express");
const cors = require('cors')
const path = require('path');
const port = process.env.PORT || 4000;

const app = express(); // create express app
app.use(cors())
app.set('port', port);

const reactBuildPath = path.join(__dirname + '/client/build/index.html')

// Static React Routing
app.use(express.static(path.join(__dirname, '/client/build')))
app.get('/', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/filter/*', (_, res) => { res.sendFile(reactBuildPath); })


// Backend calls under /server/api/index
const routes = require('./server/api/index');
app.use("/", routes)

// start express server
app.listen(port, () => {
  console.log(`server started on port ${port}`);
})