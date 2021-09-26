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
            break;
        case 'powderblue':
            document.body.style.background = 'black';
            break;
        case 'black':
            document.body.style.background = '';
            break;
    } 
}