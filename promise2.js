const chd=require('readline-sync')

const mypromise=new Promise((resolve,reject)=>
{
    
    var n=chd.questionInt('enter your age ')
    
    if(n>18)
    {
        resolve('you are eligible for vote')
    }
    else{
        reject('not allowed failed')
    }
                                        //producing code

}).then(
    value=>{return 100
    }                                 //consuming code


    ).then(
 value=>
 {
    return value*2
 }


 ).then(
value=>console.log('ans is '+value)


).catch(Error)
{
    //console.log(Error)
}