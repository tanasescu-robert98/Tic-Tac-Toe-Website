function changeBodyBg()
{
    localStorage.clickcount = Number(localStorage.clickcount)+1;
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