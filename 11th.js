const chd=require('readline-sync')

function test()
{
    return new Promise((resolve,reject)=>
    {
        var n=chd.questionInt('enter your age ')
        if(n>18)
        {
            resolve('you are eligible ')
        }
        else{
            reject('you are not eligible')
        }
    })
}
test().then(
    value=>{console.log(value)},
    error=>{console.log(error)}
)