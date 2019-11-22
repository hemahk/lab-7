function init()
{
    document.addEventListener('click', function (event)
    {
        if (event.target.matches('#entrybutton'))
        {
            var textbox = document.getElementById('entryinput').value;
            alert('Hema says: ' + textbox);
            document.getElementById("textoutput").innerHTML = textbox;
        }
    });
}

window.addEventListener('load', init);