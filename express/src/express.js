const express = require('express')
const app = express()
const port = 2000
app.use(express.json());
app.get('/', (req, res) => {
    const {token}=req.headers;
    console.log(`Hello World! ${token}`);
    
  res.send(`Hello World! ${token}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
