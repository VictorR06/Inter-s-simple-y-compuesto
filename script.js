function interesS() {
    capital = document.getElementById("capital")
    interest = document.getElementById("interest")
    time = document.getElementById("time")
    capitalV = parseInt(capital.value)
    interestV = parseInt(interest.value)
    timeV = parseInt(time.value)

    capital = capitalV*(1 + interestV/100 * timeV)
    capitalF = capital.toFixed(2)
    
    result = document.getElementById("result")
    result.innerText = "Capital final: " + capitalF
}

function interesC() {
    capital = document.getElementById("capital")
    interest = document.getElementById("interest")
    time = document.getElementById("time")
    capitalV = parseInt(capital.value)
    interestV = parseInt(interest.value)
    timeV = parseInt(time.value)

    capital = capitalV*((1 + interestV/100)**timeV)
    capitalF = capital.toFixed(2)

    result = document.getElementById("result")
    result.innerText = "Capital final: " + capitalF
}