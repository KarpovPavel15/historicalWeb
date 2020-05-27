const express = require('express');
const app = express();

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

// app.get('/',(req,res)=>res.sendFile(__dirname + "/main.css"));
app.get('/routes/:idn',(req,res)=>res.sendFile(__dirname + "/main.js"));

const PORT = process.env.PORT || 8080;


app.use(express.static('./'));

app.listen(PORT, () => console.log('Server has been started'));
