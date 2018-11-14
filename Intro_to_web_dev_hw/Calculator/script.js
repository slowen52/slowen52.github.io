function squareNumber(){
    var num1 = document.getElementById('square-input').value
    var output = num1 * num1
    
    var solutionDiv = document.getElementById('solution')
    solutionDiv.innerHTML = "the square root of " + num1 + " is "+ output
}

var squareButton = document.getElementById('square-button')
squareButton.addEventListener('click', squareNumber)

function halfNumber(){
    var num1 = document.getElementById('half-input').value
    var output = num1/2
    
    var solutionDiv = document.getElementById('solution')
    solutionDiv.innerHTML = "half of " + num1 + " is "+ output
}

var halfButton = document.getElementById('half-button')
halfButton.addEventListener('click', halfNumber)

function percentOf(){
    var num1 = document.getElementById('percent1-input').value
    var num2 = document.getElementById('percent2-input').value
    
    var output = num1/num2 * 100
    
    output = output.toFixed(2)
    
    var solutionDiv = document.getElementById('solution')
    solutionDiv.innerHTML = num1 + " is "+ output + "% of " + num2
}

var percButton = document.getElementById('percent-button')
percButton.addEventListener('click', percentOf)



function areaOfCircle(){
    var radius = document.getElementById('area-input').value
    var area = Math.PI * radius * radius
    
    area = area.toFixed(2)
    
    var solutionDiv = document.getElementById('solution')
    
    solutionDiv.innerHTML = "Area of a circle with a radius of "+ radius + " is " + area
}

var areaButton = document.getElementById('area-button')
areaButton.addEventListener('click', areaOfCircle)


