/* membuat class mail */

/* cara 1 */ 
// function Mail() 
// {
//     this.from = 'pengirim@email.com';
// };

// Mail.prototype.sendMessage = function n(msg, to)
// {
//     console.log(`you send: ${msg} to ${to} from ${this.from}`);
// };


/* cara 1 tanpa prototype */ 
// function Mail()
// {
//     this.from = "pengirim@mail.com",
//     this.sendMessage = function(msg, to)
//     {
//         console.log(`you send: ${msg} to ${to} from ${this.from}`)
//     }
// };

/* cara 2 */

class Mail
{
    constructor()
    {
        this.from = 'pengirim@email.com';
    }
    sendMessage(msg, to)
    {
        console.log(`you send: ${msg} to ${to} from ${this.from}`)
    };
    static isValidPhone(phone) 
    {
        return typeof phone === 'number';
    }
}


const mailsatu = new Mail();
mailsatu.sendMessage('dear madam/sir, hereby..', 'hrd@mail.com');
console.log(mailsatu.isValidPhone(0856123453))
