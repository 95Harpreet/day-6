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
    /*var result=p%2
    return setTimeout(()=>{mohali(result)},3000)*/
}
hello(12,3).then(
    value=>{
        console.log('sum is '+value);
    by(value).then(
        value=>{console.log('sub is '+value);
        hi(value).then(
            value=>{console.log('div is '+value)}
        )
    }

        )
    
        }
)



/*hello(12,3,(k)=>{
    console.log('sum is '+k)
    by(k,(t)=>{
        console.log('sub is '+t)
        hi(k,(div)=>
        {
            console.log('div is '+div)
        })
    })
})*/
