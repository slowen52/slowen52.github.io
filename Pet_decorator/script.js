var empty = document.getElementById('location')
var panda = document.getElementById('panda')

function onPandaClick(e){
    var bow = document.getElementById('bow')

    bow.style.top = e.clientY - 25 + "px";
    bow.style.left = e.clientX -40 + "px";

    empty.textContent = e.clientY + 'px' + e.clientX + "px";
    
    console.log(e.clientX)
}

panda.addEventListener("click", onPandaClick)