dalam kesempatan kali ini saya ingin mempelajari menggunakan nodejs secara native dan framework

## Membuat server dengan node native
1. buat folder project `mkdir project_name && cd project_name`
2. initialize npm `npm init --y`
3. import http module `const http = require('http');` dalam file `server.js`
4. tambahkan baris fungsi arrow `const requestListener = (request, response) => {}`
5. dalam body fungsi arrow tambahkan beberapa fungsi request (method request, body request, routing request) dan fungsi respon (respon status, header dan body)
6. buat fungsi _server_ dengan memasukan fungsi _requestListener_ `const server = http.createServer(requestListener)`

contoh keseluruhan code dalam file _server.js_ bisa dilihat dalam kode berikut
```js
/* contoh content dalam server.js */

const http = require('http');
 
const requestListener = (request, response) => {
    
    // set header request
    response.setHeader('Content-Type', 'text/HTML');
    response.setHeader('X-Powered-By', 'NodeJS');
    
    // import method and routing request
    const {url, method} = request;

    if (url === '/')
    {
        if (method === 'GET')
        {
            response.statusCode = 200;
            response.end('<h1> ini adalah homepage </h1>');
        }
        else
        {
            response.statusCode = 400;
            response.end(`<h1> halaman ini tidak dapat diakses dengan metode ${method} request</h1>`)
        }
    }
    else if (url === '/about')
    {
        if (method === 'GET')
        {
            response.statusCode = 200;
            response.end(`<h1>ini adalah halaman about</h1>`);
        } 
        else if (method === 'POST')
        {
            let body = [];

            request.on('data',(chunk) => {body.push(chunk);});

            request.on('end',() => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>halo, ${name}! ini adalah halaman about`);
            });
        }
        else
        {
            response.statusCode = 400;
            response.end(`<h1> halaman tidak dapat diakses melalui ${method} request </h1>`);
        }
    }
    else 
    {
        response.statusCode = 404;
        response.end(`<h1> halaman tidak dapat ditemukan </h1>`);
    }
};
```

## membuat server nodejs dengan framework hapijs