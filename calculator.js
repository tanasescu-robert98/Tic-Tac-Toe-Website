function insert(e2,id)
{
  var result_button = document.getElementById("result_show");
    if(id == "button1")
        result = result * 10 + 1;
    else if(id == "button2")
        result = result * 10 + 2;
    else if(id == "button3")
        result = result * 10 + 3;
    else if(id == "button4")
        result = result * 10 + 4;
    else if(id == "button5")
        result = result * 10 + 5;
    else if(id == "button6")
        result = result * 10 + 6;
    else if(id == "button7")
        result = result * 10 + 7;
    else if(id == "button8")
        result = result * 10 + 8;
    else if(id == "button9")
        result = result * 10 + 9;
  console.log(result);
  result_button.innerHTML = result.toString();
}

function add()
{
    if(first_number != 0)
    {
        equal();
        action_to_do = "add";
        add();
    }
    else
    {
        first_number = result;
        result = 0;
        action_to_do = "add";
    }
}

function minus()
{
    if(first_number != 0)
    {
        equal();
        action_to_do = "minus";
        minus();
        
    }
    else
    {
        first_number = result;
        result = 0;
        action_to_do = "minus";
    }
}

function multiply()
{
    if(first_number != 0)
    {
        equal();
        action_to_do = "multiply";
        multiply();
        
    }
    else
    {
        first_number = result;
        result = 0;
        action_to_do = "multiply";
    }
}

function divide()
{
    if(first_number != 0)
    {
        equal();
        action_to_do = "divide";
        divide();
    }
    else
    {
        first_number = result;
        result = 0;
        action_to_do = "divide";
    }
}

function equal()
{
    var result_button = document.getElementById("result_show");
    console.log(result);
    if(action_to_do == "add")
        result = first_number + result;
    else if(action_to_do == "minus")
        result = first_number - result;
    else if(action_to_do == "multiply")
        result = first_number * result;
    else if(action_to_do == "divide")
        if(result != 0)
            result = first_number / result;
    result_button.innerHTML = result.toString();
    first_number = 0;
}

function reset()
{
    result = 0;
    first_number = 0;
    second_number = 0;
    var result_button = document.getElementById("result_show");
    result_button.innerHTML = result.toString();
}