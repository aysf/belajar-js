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

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log('Server berjalan pada http://${host}:${port}');
});

```

## membuat server nodejs dengan framework hapijs
1. create npm project `npm init --y`
2. install auto generator `npm install nodemon --save-dev`
4. install eslint `npm install eslint --save-dev`
5. configure eslint `npx eslint --init`
6. add nodemon and eslint command in runner _package.json_
```js
"scripts": {
  "start": "nodemon ./src/server.js",
  "lint": "eslint ./src"
}, 
```
7. install hapi `npm install @hapi/hapi`
8. structure project
```sh
notes-app-back-end
├── node_modules
├── src
│ ├── handler.js //memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes
│ ├── notes.js //memuat data notes yang disimpan dalam bentuk array object
│ ├── routes.js //memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan
│ └── server.js //memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi
├── .eslintrc.json
├── package-lock.json
└── package.json
```
9. content for _server.js_
```js
const Hapi = require('@hapi/hapi');

const init = asynch () => {
    const server = Hapi.server({port:5000, host:'localhost'});

    await server.start();
    console.log('server berjalan pada ${server.info.uri});
}

init();
```