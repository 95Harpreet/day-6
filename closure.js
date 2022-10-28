function hello()
{
    var w=34
    console.log('outer w value is '+w)
    function by()          //by is closure function bcoz it used w variable inside it
    {
        k=45
        console.log('k value is'+k)
        console.log('inner w value is'+w)
    }
    by()
    console.log('outer k value is '+k)
}
hello()