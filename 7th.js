function hello(a,b)
{
    var c=a+b
    return setTimeout(()=>{return c},4000)
}

function by(z)
{
    var ans=z-4
    return setTimeout(()=>{return ans},2000)
}
var w=hello(12,3)
var k=by(w)
console.log('your result is '+k)