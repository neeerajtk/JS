var age = Number(prompt("Enter ur age : "));
if(age<0)
{
    console.log("Come back once ur out of womb !!");
}
else if(age<18)
{
    console.log("Grow up kid");
}
else
{
    console.log("Lets party");
}

if(age==21)
{
    console.log("Happy 21st birthday");
}
if(age%2 != 0 )
{
    console.log("Your age is odd");
}

if(age % Math.sqrt(age)===0)
{
    console.log("Your age s a perfect square");
}