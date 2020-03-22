var secretNumber=5;

var flag=0;
while (flag==0)
{
    var guess=Number(prompt("Guess a number: "));
    if(guess===secretNumber)
    {
        alert("Correct");
        flag=1;
    }
    else if(guess>secretNumber)
    {
        alert("Too High");
    }
    else
    {
        alert("Too Low");
    }
}