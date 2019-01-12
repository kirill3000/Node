const http = require("http");
const fs = require("fs");
let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});
 
http.createServer(function(request, response){
     
    fs.readFile("test.html", "utf8", function(error, data){
    
var json = '{"result":true, "count":42}'
;
obj = JSON.parse(json);


console.log(obj.count);



console.log(obj.result);
     
        let message = "Изучаем Node.js"; 
        let header = "Главная страница";
        data = data.replace("{header}", header).replace("{message}", message);
        response.end(data);




    })
}).listen(8888);