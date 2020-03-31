function Generate(){
    var x = Math.floor(Math.random() *226) +1;
    var y = Math.floor(Math.random() *226) +1;
    var z = Math.floor(Math.random() *226) +1;
    document.querySelector("img").style.backgroundColor = "rgb(" +x+ ',' +y+ ',' +z+")"
}  
function Reveal()
{
    var chooseColor = document.querySelector("select").value;
    document.querySelector("img").style.backgroundColor = chooseColor;
}
function restart(){
    document.getElementById("motorchange").style.backgroundColor = "white";
}
