window.onload = function() //Une fois le html chargé
{ 
    var slider = document.getElementById("myRange");
    var output = document.getElementById("val");
    output.innerHTML = slider.value;

    // au changement de la valeure 
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
        //on déplace la position du background
        document.getElementById('myWindow').style.backgroundPositionX = '0px';
        document.getElementById('myWindow').style.backgroundPositionY = -470+this.value*4.4+'px';
        if (this.value == 100) // si la valeure du range == 100
        {
            document.getElementById('myWindow').style.backgroundPositionY = '-1118px';
            document.getElementById('myWindow').style.backgroundPositionX = '10px';
        }
        else if (this.value == 0) // si la valeure du range == 0
        {
            document.getElementById('myWindow').style.backgroundPositionY = '-1550px';
            document.getElementById('myWindow').style.backgroundPositionX = '10px';
        }
    };
}