function myFunction(){
    document.getElementById('title').innerHTML = ' '
}

function first(){
    document.getElementById('first').style.backgroundColor = 'purple';
    document.getElementById('first').style.color= 'white';
           
            
}

function second(){
    document.getElementById('seconds').style.backgroundColor = 'red';
}

function count(){
    var total = document.getElementsByTagName('h2')
    alert("There are "+ total.length+ " heading tags on the page")
    
    var section1 = document.getElementById('first').getElementsByTagName('h2')
    
    alert("There are "+ section1.length + " elements in the first div.")
    
    var section2 = document.getElementById('seconds').getElementsByTagName('h2')
    
    alert("There are "+ section2.length + " elements in the second div.")
}
