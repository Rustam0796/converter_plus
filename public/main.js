const num1 = document.getElementById('sum1')
const num2 = document.getElementById('sum2')
const res = document.getElementById('Result')
const plus = document.getElementById('plus')

function calculate() {
    res.innerHTML = parseInt(num1.value) + parseInt(num2.value)
}