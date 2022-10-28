const chd=require('readline-sync')

const mypromise=new Promise((resolve,reject)=>
{
    
    var n=chd.questionInt('enter your age')
    
    if(n>18)
    {
        resolve('you are eligible for vote')
    }
    else{
        reject('not allowed failed')
    }
    //producing code

}).then(
    value=>{console.log(value)},               //consuming code
    error=>{console.log(error)}
).finally
{
    console.log('program end')
}