/* 
* throw statement
*/

// awalnya
// let contacts = '{"name":"Mike", "age":23}';

// jika property name dihapus
let contacts = '{"age":23}';

try
{
    let contact = JSON.parse(contacts);

    if (!contact.name)
    {
        throw new SyntaxError("'name' is required")
    }
    
    console.log(contact.name);
    console.log(contact.age);
}
catch (error)
{
    console.log(`JSON Error: ${error.message}`);
}
