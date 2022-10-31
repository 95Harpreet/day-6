const chd=require('readline-sync')

function test()
{
    return new Promise((resolve,reject)=>
    {
        var n=chd.questionInt('enter your age ')
        if(n>18)
        {
           setTimeout(()=>
           {resolve('you are eligible ')},4000) 
        
        }
        else
        {
            setTimeout(()=>
                {reject('you are not eligible')},3000)
            
        }
    })
}
test().then(
    value=>{console.log(value)},
    error=>{console.log(error)}
)