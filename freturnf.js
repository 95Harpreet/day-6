function hello()                             //function return function
{
    var a=12,b=23,c
    c=a+b
    return function by()
    {
        var z=c-3
        return z
    }
}
var hi=hello()
var ans=hi()
console.log('value of z is '+ans)
