import http from 'http';
import url from 'url';
import request from 'request';


const server = http.createServer((req, res) => { // 서버생성


    server.listen(8000);

});





/*



*/ 
    
    /*

    var geturl = 'http://localhost:8000/foo' + bar
    request.get({
        url: geturl
    });

    var posturl = 'http://localhost:8000/foo' + bar
    request.post({
        url: posturl
    });
*/

/* 

    let {url, headers, method} = req

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<p>Hello World!</p>');
    res.end();

    const bar = "hi";
    
    if (req.url == '/foo'){
        res.write("a")

    } else if(method === 'GET') {
        res.write("GET");
        res.end();

    } else if(method === 'POST'){
        res.write("POST");
        res.end();
        }

*/
