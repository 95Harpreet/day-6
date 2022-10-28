function hello(a,b,chd)
{
    var c=a+b
    return setTimeout(()=>{chd(c)},4000)
}

function by(z,ambala)
{
    var ans=z-4
    return setTimeout(()=>{ambala(ans)},2000)
}
hello(12,3,(k)=>{
    console.log('sum is '+k)
    by(k,(t)=>{
        console.log('sub is '+t)
    })
})
