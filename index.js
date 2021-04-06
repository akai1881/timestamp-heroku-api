const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send({
    fulldate: new Date()
  });
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));



