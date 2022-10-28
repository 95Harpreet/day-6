var a=34            //global scope
function hello()
{
    console.log('your a value is '+a)           //a accessed inside
}
hello()
console.log('your outer a value is '+a)           //a accessed outside so a is global

