function hello()
{
     var a=32             //local scope
    console.log('your a value is '+a)           //a can be accessed inside only
}
hello()
console.log('your outer a value is '+a)           //a cannot be accessed outside so a is local

