function insert(e2,id)
{
  var result_button = document.getElementById("result_show");
    if(id == "button1")
        shown_number = shown_number * 10 + 1;
    else if(id == "button2")
        shown_number = shown_number * 10 + 2;
    else if(id == "button3")
        shown_number = shown_number * 10 + 3;
    else if(id == "button4")
        shown_number = shown_number * 10 + 4;
    else if(id == "button5")
        shown_number = shown_number * 10 + 5;
    else if(id == "button6")
        shown_number = shown_number * 10 + 6;
    else if(id == "button7")
        shown_number = shown_number * 10 + 7;
    else if(id == "button8")
        shown_number = shown_number * 10 + 8;
    else if(id == "button9")
        shown_number = shown_number * 10 + 9;
  result_button.innerHTML = shown_number.toString();
  input_number = shown_number.toString();
  console.log(input_number);
}

function add()
{
    if(first_number == 0)
    {
        operations = operations + shown_number.toString() + "+";
        first_number = 1;
        shown_number = 0;
        console.log(operations);
    }
    else
    {
        if(previous_operation == "equal")
        {
            shown_number = 0;
            console.log(operations);
            operations = operations + "+";
        }
        else
        {
            operations = operations + shown_number.toString() + "+";
            shown_number = 0;
            console.log(operations);
            const new_result = operations.slice(0,-1);
            console.log(new_result);
            var result_button = document.getElementById("result_show");
            result = eval(new_result);
            result_button.innerHTML = result.toString();
        }
    }
    previous_operation = "add";
}

function minus()
{
    if(first_number == 0)
    {
        operations = operations + shown_number.toString() + "-";
        first_number = 1;
        shown_number = 0;
        console.log(operations);
    }
    else
    {
        if(previous_operation == "equal")
        {
            shown_number = 0;
            console.log(operations);
            operations = operations + "-";
        }
        else
        {
            operations = operations + shown_number.toString() + "-";
            shown_number = 0;
            console.log(operations);
            const new_result = operations.slice(0,-1);
            console.log(new_result);
            var result_button = document.getElementById("result_show");
            result = eval(new_result);
            result_button.innerHTML = result.toString();
        }
    }
    previous_operation = "minus";
}

function multiply()
{
    if(first_number == 0)
    {
        operations = operations + shown_number.toString() + "*";
        first_number = 1;
        shown_number = 0;
        console.log(operations);
    }
    else
    {
        if(previous_operation == "equal")
        {
            shown_number = 0;
            console.log(operations);
            operations = operations + "*";
        }
        else
        {
            operations = operations + shown_number.toString() + "*";
            shown_number = 0;
            console.log(operations);
            const new_result = operations.slice(0,-1);
            console.log(new_result);
            var result_button = document.getElementById("result_show");
            result = eval(new_result);
            result_button.innerHTML = result.toString();
        }
    }
    previous_operation = "multiply";
}

function divide()
{
    if(first_number == 0)
    {
        operations = operations + shown_number.toString() + "/";
        first_number = 1;
        shown_number = 0;
        console.log(operations);
    }
    else
    {
        if(previous_operation == "equal")
        {
            shown_number = 0;
            console.log(operations);
            operations = operations + "/";
        }
        else
        {
            operations = operations + shown_number.toString() + "/";
            shown_number = 0;
            console.log(operations);
            const new_result = operations.slice(0,-1);
            console.log(new_result);
            var result_button = document.getElementById("result_show");
            result = eval(new_result);
            result_button.innerHTML = result.toString();
        }
    }
    previous_operation = "divide";
}

function equal()
{
    if(previous_operation != "equal")
    {
        previous_operation = "equal";
        var result_button = document.getElementById("result_show");
        operations = operations + shown_number.toString();
        result = eval(operations);
        console.log(result);
        result_button.innerHTML = result.toString();
        operations = result.toString();
    }
}

function reset()
{
    shown_number = 0;
    result = 0;
    first_number = 0;
    operations = "";
    var result_button = document.getElementById("result_show");
    result_button.innerHTML = result.toString();
}