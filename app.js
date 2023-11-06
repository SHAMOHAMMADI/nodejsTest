// const readline = require("readline");
// const fs = require("fs");

// const rl = readline.createInterface({
//   input: process.stdin,
//   ouput: process.stdout,
// });

// rl.question('Product Title:', (product) => {
//   fs.writeFileSync("product.txt" ,product);
//   rl.close();
// });

///////////////////////////// make webserver
// const http = require('http')
// const server = http.createServer((req,res)=>{
// console.log(req.url,req.headers,req.method)
// })
// server.listen(8020)

/////////////////
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html"); //fro declare tag h2
//   res.write("<h2>Hello World</h2>");
//   res.write("<p>Hello World</p>");

//   res.end();
// });
// server.listen(8020);

/////////////////
const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {

  const url = req.url
  const method = req.method

  if(url === '/'){
    res.setHeader("Content-Type", "text/html")
    const form =`
       <form method="POST action ="/products">
       <input type="text name="product"/>
       <button type ="submit">add product</button>
        </form>
    `
    res.write(form)
    return res.end()
  }
if(url === '/products' && method ==='POST'){
   const items = []
  req.on('data' , (data)=>{
     console.log(data)
    items.push(data)
  })
  req.on('end',()=>{
    const parsedData = Buffer.concat(items).toString()
    console.log(parsedData)
  })
    fs.writeFileSync('products.txt','product name')
    res.statusCode=302 
    res.setHeader('Location' , '/')
    return res.end()
  }
  

    res.setHeader('Content-Type','text/html')
    const title = '<h2>Shop Page</h2>'
    res.write(title)
    res.end()
  
})

server.listen(8020)
