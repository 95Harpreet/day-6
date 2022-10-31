function hello(a,b)
{
    return new Promise((resolve,reject)=>
    {
        var c=a+b
        setTimeout(()=>{
            resolve(c)},4000);
    })
    
   /* var c=a+b
    return setTimeout(()=>{chd(c)},4000)*/
}

function by(z)
{
    return new Promise((resolve,reject)=>
    {
        var ans=z-4
        setTimeout(()=>{
            resolve(ans)},4000);
    })
   /* var ans=z-4
    return setTimeout(()=>{ambala(ans)},2000)*/
}
function hi(p)
{
    return new Promise((resolve,reject)=>
    {
        var result=p%2
        setTimeout(()=>{
            resolve(result)},4000);
    })
}
async function reportcard()
{
    var addvalue=await hello(12,3)
    console.log('sum is '+addvalue)
    var subtractvalue=await by(addvalue)
    console.log('sub is '+subtractvalue)
    var divvalue=await hi(subtractvalue)
    console.log('div is '+divvalue)
}
reportcard()