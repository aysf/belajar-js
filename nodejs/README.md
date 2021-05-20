## Membuat server dengan node native
1. buat folder project `mkdir project_name && cd project_name`
2. initialize npm `npm init --y`
3. import http module `const http = require('http');` dalam file `server.js`
4. tambahkan baris fungsi arrow `const requestListener = (request, response) => {}`
5. dalam body fungsi arrow tambahkan beberapa fungsi request routing _url_ dan _method_
6. buat fungsi _server_ dengan memasukan fungsi _requestListener_ `const server = http.createServer(requestListener)`

contoh keseluruhan code dalam file _server.js_ bisa dilihat dalam kode berikut
```js

```