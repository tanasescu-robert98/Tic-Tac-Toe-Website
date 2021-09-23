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

function add(e3)
{
    first_number = result;
    result = 0;
}

function minus(e3)
{
    first_number = result;
    result = 0;
}

function equal(e4)
{
    var result_button = document.getElementById("result_show");
    console.log(result);
    result = result + first_number;
    result_button.innerHTML = result.toString();
}

function reset(e5)
{
    result = 0;
    first_number = 0;
    second_number = 0;
    var result_button = document.getElementById("result_show");
    result_button.innerHTML = result.toString();
}