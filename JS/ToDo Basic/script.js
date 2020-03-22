var todos=["Buy new turtle "];
var input="a";
while(input != "quit")
{
    var input= prompt("Enter any of the operation");
    if (input=="new")
    {
        var value = prompt("Enter the thing to do : ");
        todos.push(value);

    }   
    else if(input=="list")
    {
            // console.log(todos);
            console.log("***********");
            todos.forEach(function(todo,i)
            {
                console.log(i+" : "+todo);
            });
            console.log("************");
    }
    else if(input=="delete")
    {
        var index = prompt("Enter the index to be deleted ");
        todos.splice(index,1);
    }
}
