/* 
* error property
*/

try
{
    console.log("1st statement");
    errorCode342&&$;
    console.log("2nd statement");
}
catch (error)
{
    // nama error yang terjadi
    console.log(error.name);
    // pesan detail error
    console.log(error.message);
    // informasi urutan kejadian yang menyebabkan error
    console.log(error.stack);
}