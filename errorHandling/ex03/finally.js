/* 
* finally statement
*/

try
{
    console.log("first statement");
    errorrrrrcodeeeee;
    console.log("2nd statement");
}
catch (error)
{
    console.log("kesalahan:", error.name);
}
finally
{
    console.log("this block is still executed regardless the result");
}