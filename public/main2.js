const con = document.getElementById("con")

// const dollar = document.getElementById("Dollar")
// const sum = document.getElementById("So'm")

const res = document.getElementById("res")

function converter() {
    res.innerHTML = parseInt(con.value) * 11000
}

function sum() {
    res.innerHTML = parseInt(con.value) / 11000
}
