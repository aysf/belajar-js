/*
* setelah kita berhasil membuat object pada user, kita harus menambahkan object untuk setiap user
* yang dibuat. Untuk dapat menggandakan user dengan cepat maka dibuatlah class yang berisi
* template object untuk membuat user.
*/

class User 
{
    constructor(email, name)
    {
        this.email = email;
        this.name = name;
    }
    login()
    {
        console.log(this.email, ' has logged in');
        return this;
    }
    logout()
    {
        console.log(this.email, 'has logged out');
        return this;
    }
}

let userOne = new User('ryomashiba@ipho.com','ryo');
let userTwo = new User('takhesisendo@ipho.com','sendos');

console.log(userOne);
console.log(userTwo);