function clickCounter() 
{
  var val1 = localStorage.getItem('value1');
  if(val1 == null)
  {
    localStorage.setItem('value1', 1);
  }
  else
  {
    val1++;
    localStorage.setItem('value1', val1);
  }
  console.log(val1);
  //   if (typeof(Storage) !== "undefined") 
  //   {
  //     if (localStorage.clickcount != null) 
  //     {
  //       localStorage.clickcount = Number(localStorage.clickcount)+1;
  //     } 
  //     else 
  //     {
  //       localStorage.clickcount = 1;
  //     }
  //     document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  //   } 
  //   else 
  //   {
  //     document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  //   }
  }