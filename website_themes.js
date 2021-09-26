function changeBodyBg()
{
    var val1 = localStorage.getItem('value1');
    if(val1 == null)
    {
        localStorage.setItem('value1', 0);
    }
    else
    {
        val1++;
        localStorage.setItem('value1', val1);
    }
    console.log(val1);
    switch(document.body.style.background) 
    {
        case '':
            document.body.style.background = 'powderblue';
            var b1 = document.getElementById("button1");
            b1.style.backgroundColor = "rgb(88,98,240)";
            var b2 = document.getElementById("button2");
            b2.style.backgroundColor = "rgb(88,98,240)";
            var b3 = document.getElementById("button3");
            b3.style.backgroundColor = "rgb(88,98,240)";
            var b4 = document.getElementById("button4");
            b4.style.backgroundColor = "rgb(88,98,240)";
            var b5 = document.getElementById("button5");
            b5.style.backgroundColor = "rgb(88,98,240)";
            var b6 = document.getElementById("button6");
            b6.style.backgroundColor = "rgb(88,98,240)";
            var b7 = document.getElementById("button7");
            b7.style.backgroundColor = "rgb(88,98,240)";
            var b8 = document.getElementById("button8");
            b8.style.backgroundColor = "rgb(88,98,240)";
            var b9 = document.getElementById("button9");
            b9.style.backgroundColor = "rgb(88,98,240)";
            var refresh_button = document.getElementById("refresh_button");
            refresh_button.style.backgroundColor = "rgb(88,98,240)";
            var tic_toe = document.getElementById("tic_toe");
            if(tic_toe != null)
                tic_toe.style.backgroundColor = "rgb(88,98,240)";
            var calc_button = document.getElementById("calc_button");
            if(calc_button != null)
                calc_button.style.backgroundColor = "rgb(88,98,240)";
            var result_button_calc = document.getElementById("result_show");
            if(result_button_calc != null)
                result_button_calc.style.backgroundColor = "rgb(88,98,240)";
            var button_plus = document.getElementById("button_plus");
            if(button_plus != null)
                button_plus.style.backgroundColor = "rgb(88,98,240)";
            var button_minus = document.getElementById("button_minus");
            if(button_minus != null)
                button_minus.style.backgroundColor = "rgb(88,98,240)";
            var button_plus = document.getElementById("button_plus");
            if(button_plus != null)
                button_plus.style.backgroundColor = "rgb(88,98,240)";
            var button_equal = document.getElementById("button_equal");
            if(button_equal != null)
                button_equal.style.backgroundColor = "rgb(88,98,240)";
            var button_multiply = document.getElementById("button_multiply");
            if(button_multiply != null)
                button_multiply.style.backgroundColor = "rgb(88,98,240)";
            var button_divide = document.getElementById("button_divide");
            if(button_divide != null)
                button_divide.style.backgroundColor = "rgb(88,98,240)";
            var button_equal = document.getElementById("button_equal");
            if(button_equal != null)
                button_equal.style.backgroundColor = "rgb(88,98,240)";
            var button_C_nou = document.getElementById("button_C_nou");
            if(button_C_nou != null)
                button_C_nou.style.backgroundColor = "rgb(88,98,240)";
            break;
        case 'powderblue':
            document.body.style.background = 'black';
            var b1 = document.getElementById("button1");
            b1.style.backgroundColor = "rgb(125,125,131)";
            var b2 = document.getElementById("button2");
            b2.style.backgroundColor = "rgb(125,125,131)";
            var b3 = document.getElementById("button3");
            b3.style.backgroundColor = "rgb(125,125,131)";
            var b4 = document.getElementById("button4");
            b4.style.backgroundColor = "rgb(125,125,131)";
            var b5 = document.getElementById("button5");
            b5.style.backgroundColor = "rgb(125,125,131)";
            var b6 = document.getElementById("button6");
            b6.style.backgroundColor = "rgb(125,125,131)";
            var b7 = document.getElementById("button7");
            b7.style.backgroundColor = "rgb(125,125,131)";
            var b8 = document.getElementById("button8");
            b8.style.backgroundColor = "rgb(125,125,131)";
            var b9 = document.getElementById("button9");
            b9.style.backgroundColor = "rgb(125,125,131)";
            var refresh_button = document.getElementById("refresh_button");
            refresh_button.style.backgroundColor = "rgb(125,125,131)";
            var tic_toe = document.getElementById("tic_toe");
            if(tic_toe != null)
                tic_toe.style.backgroundColor = "rgb(125,125,131)";
            var calc_button = document.getElementById("calc_button");
            if(calc_button != null)
                calc_button.style.backgroundColor = "rgb(125,125,131)";
            var result_button_calc = document.getElementById("result_show");
            if(result_button_calc != null)
                result_button_calc.style.backgroundColor = "rgb(125,125,131)";
            var button_plus = document.getElementById("button_plus");
            if(button_plus != null)
                button_plus.style.backgroundColor = "rgb(125,125,131)";
            var button_minus = document.getElementById("button_minus");
            if(button_minus != null)
                button_minus.style.backgroundColor = "rgb(125,125,131)";
            var button_plus = document.getElementById("button_plus");
            if(button_plus != null)
                button_plus.style.backgroundColor = "rgb(125,125,131)";
            var button_equal = document.getElementById("button_equal");
            if(button_equal != null)
                button_equal.style.backgroundColor = "rgb(125,125,131)";
            var button_multiply = document.getElementById("button_multiply");
            if(button_multiply != null)
                button_multiply.style.backgroundColor = "rgb(125,125,131)";
            var button_divide = document.getElementById("button_divide");
            if(button_divide != null)
                button_divide.style.backgroundColor = "rgb(125,125,131)";
            var button_equal = document.getElementById("button_equal");
            if(button_equal != null)
                button_equal.style.backgroundColor = "rgb(125,125,131)";
            var button_C_nou = document.getElementById("button_C_nou");
            if(button_C_nou != null)
                button_C_nou.style.backgroundColor = "rgb(125,125,131)";
            break;
        case 'black':
            document.body.style.background = '';
            var b1 = document.getElementById("button1");
            b1.style.backgroundColor = "rgb(76,175,80)";
            var b2 = document.getElementById("button2");
            b2.style.backgroundColor = "rgb(76,175,80)";
            var b3 = document.getElementById("button3");
            b3.style.backgroundColor = "rgb(76,175,80)";
            var b4 = document.getElementById("button4");
            b4.style.backgroundColor = "rgb(76,175,80)";
            var b5 = document.getElementById("button5");
            b5.style.backgroundColor = "rgb(76,175,80)";
            var b6 = document.getElementById("button6");
            b6.style.backgroundColor = "rgb(76,175,80)";
            var b7 = document.getElementById("button7");
            b7.style.backgroundColor = "rgb(76,175,80)";
            var b8 = document.getElementById("button8");
            b8.style.backgroundColor = "rgb(76,175,80)";
            var b9 = document.getElementById("button9");
            b9.style.backgroundColor = "rgb(76,175,80)";
            var refresh_button = document.getElementById("refresh_button");
            refresh_button.style.backgroundColor = "rgb(76,175,80)";
            var tic_toe = document.getElementById("tic_toe");
            if(tic_toe != null)
                tic_toe.style.backgroundColor = "rgb(76,175,80)";
            var calc_button = document.getElementById("calc_button");
            if(calc_button != null)
                calc_button.style.backgroundColor = "rgb(76,175,80)";
            var result_button_calc = document.getElementById("result_show");
            if(result_button_calc != null)
                result_button_calc.style.backgroundColor = "rgb(76,175,80)";
            var button_plus = document.getElementById("button_plus");
            if(button_plus != null)
                button_plus.style.backgroundColor = "rgb(76,175,80)";
            var button_minus = document.getElementById("button_minus");
            if(button_minus != null)
                button_minus.style.backgroundColor = "rgb(76,175,80)";
            var button_plus = document.getElementById("button_plus");
            if(button_plus != null)
                button_plus.style.backgroundColor = "rgb(76,175,80)";
            var button_equal = document.getElementById("button_equal");
            if(button_equal != null)
                button_equal.style.backgroundColor = "rgb(76,175,80)";
            var button_multiply = document.getElementById("button_multiply");
            if(button_multiply != null)
                button_multiply.style.backgroundColor = "rgb(76,175,80)";
            var button_divide = document.getElementById("button_divide");
            if(button_divide != null)
                button_divide.style.backgroundColor = "rgb(76,175,80)";
            var button_equal = document.getElementById("button_equal");
            if(button_equal != null)
                button_equal.style.backgroundColor = "rgb(76,175,80)";
            var button_C_nou = document.getElementById("button_C_nou");
            if(button_C_nou != null)
                button_C_nou.style.backgroundColor = "rgb(76,175,80)";
            break;
    } 
}