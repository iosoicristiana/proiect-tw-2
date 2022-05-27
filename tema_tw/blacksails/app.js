
const http = require('http');
const path = require('path');
const express= require('express');
const app = express();
var fs = require('fs');
var url = require('url');
const { urlencoded } = require('express');
const { resolveInclude } = require('ejs');

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use('/imagini', express.static('imagini'));
app.use('/javascript', express.static('javascript'));
app.use(express.static(path.join(__dirname, "html")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("html/blacksails.html"))
}
);


app.get("/altceva", (req, res) => {
  res.sendFile(path.resolve("html/altceva.html"));
}
)


app.get("/login", (req, res) => {
  res.sendFile(path.resolve("html/login.html"))
}
);


app.get("/pagina3", (req, res) => {
  res.sendFile(path.resolve("html/pagina3.html"))
}
);


app.get("/pagina4", (req, res) => {
  res.sendFile(path.resolve("html/pagina4.html"))
}
);


app.use(function(req, res, next){
  res.status(404).sendFile(path.resolve("html/404.html"))
}); 

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});








/*
app.get("/", (req, res) => {
  // O metoda
  // res.writeHead(200, { "content-type": "text/html" });
  // fs.createReadStream("index.html").pipe(res);
  
  // O alta metoda
  res.sendFile(path.join(__dirname, "/html/altceva.html"));
 });
 

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



app.use((req, res, next) => {
  res.status(404).sendFile("404.html");
});

*/