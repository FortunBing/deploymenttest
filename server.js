const express = require('express');
const app = express();

app.use((req, res)=>{
    res.send('Hello Bing')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Listening to ${PORT}`)
})