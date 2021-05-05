/*
* setelah berhasil membuat user, kita ingin membuat admin yang memiliki properti user namun
* memiliki properti tambahan untuk menghapus user lain. Hal yang perlu dilakukan adalah dengan
* mewariskan (inherit) class user ke class baru bernama admin dan menambahkan fitur deleteUser
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

class Admin extends User
{
    
}