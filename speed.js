'user script'

function howFast(){
let speed = prompt("How fast?")
if (speed = "super fast") {
    document.write('<h3>' + "You're gonna go faster than light!!!" +'</h3>')
}
else {
document.write('<h3>' + "You're gonna go " + speed + "!!!" +'</h3>')
}
}

howFast();