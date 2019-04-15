const express = require('express');
const server = express();
server.use(express());



const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`server rolling on port ${port}`));
