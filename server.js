const http=require("http");

const port = 8080;

const todoList = ["naveen","prem","raja","dinesh","melwin"];

http.createServer((req,res) => {
   const {method,url} = req;
   if(url === "/todos") {
    if(method === "GET"){
        res.writeHead(200);
        res.write(todoList.toString())
    }
    else if(method === "POST") {
          let body = " ";
          req.on('error',(err) => {
            console.error(err)
          }).on('data',(chunk) => {
                 body += chunk;
                 console.log("peace of data", chunk);
          }).on('end', () => {
            body = JSON.parse(body)
            console.log("body data", body);
            let newTodo = todoList;
            newTodo.push(body.item);
          
          })
    }
    else{
        res.writeHead(501);
    }
   
}
else if(url ==="/"){

}

    res.end();
})
.listen(port,() => {
    console.log(`run successfully ${port}`)
})
