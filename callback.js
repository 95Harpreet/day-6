function hi(a,b,pankaj)
{
    var c;
    c=a+b
   pankaj(c)
    
}
hi(12,3,(x)=>
{
    console.log('sum is '+x)
})