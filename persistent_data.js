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
}