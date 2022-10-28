const chd=require('readline-sync')
var a
a=chd.questionInt('enter your a value')
if(a==5)
{
    var z=23           //global
    console.log('z value is '+z)
}
console.log('outer z value is '+z)