function change(e1)
{
//   var bla = document.getElementById("myDIV3");
//   bla.style.backgroundColor = "rgb(255,255,255)";
//   bla.innerHTML = "Have fun!";

//   var bla2 = document.getElementById("myDIV4");
//   bla2.style.backgroundColor = "rgb(255,255,255)";
//   bla2.innerHTML = "Have fun!";
  if(e1.innerHTML == "0" || e1.innerHTML == "X")
          return;    
      if(GAME_OVER == 0)
      {
        N++;
        if(N % 2 != first_choice)
        {
          e1.style.backgroundColor = "rgb(35,182,255)";
          e1.innerHTML = "X";
          e1.disabled = true;
        }
        else
        {
          e1.style.backgroundColor = "rgb(162,46,240)";
          e1.innerHTML = "0";
          e1.disabled = true;
        }
        console.log(N);
        check_endgame();
      }
}