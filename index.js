let t1score = 0
let t2score = 0
let t1foul = 0
let t2foul = 0

const t1scoreEl = document.getElementById("t1-score")
const t2scoreEl = document.getElementById("t2-score")

const t1foulEl = document.getElementById("t1-foulcounter")
const t2foulEl = document.getElementById("t2-foulcounter")

function t1add1(){
    t1score += 1
    t1scoreEl.textContent = t1score
}

function t1add2(){
    t1score += 2
    t1scoreEl.textContent = t1score
}

function t1add5(){
    t1score += 5
    t1scoreEl.textContent = t1score
}

function t2add1(){
    t2score += 1
    t2scoreEl.textContent = t2score
}

function t2add2(){
    t2score += 2
    t2scoreEl.textContent = t2score
}

function t2add5(){
    t2score += 5
    t2scoreEl.textContent = t2score
}

function t1Foul(){
    t1foul += 1
    t1foulEl.textContent = t1foul
}

function t2Foul(){
    t2foul += 1
    t2foulEl.textContent = t2foul
}

function newGame(){
    t1score = 0
    t2score = 0
    t1foul = 0
    t2foul = 0
    t1scoreEl.textContent = t1score
    t2scoreEl.textContent = t2score
    t1foulEl.textContent = t1foul
    t2foulEl.textContent = t2foul
}