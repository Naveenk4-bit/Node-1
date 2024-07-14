const http=require("http");

const port = 8080;
http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h1>Finaly you run this project naveen congrats </h1>");
    res.end();
})
.listen(port,() => {
    console.log(`run successfully ${port}`)
})
