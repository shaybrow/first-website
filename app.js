'use strict'


function goToSpace(){
let go = prompt("Where do you wanna go?");
let count = 0;
while (go != 'Space!'){
if (count === 1){
    go = prompt("Space?")
} 
    
    if (count === 2){
        go = prompt("I wanna go to space! Where do you wanna go?")
    }
    
    if (count === 3){
        go = prompt("Please type 'Space!'")
    }
    
    if (count === 4){
        go = prompt("Sigh'");
        
    }
    if (count >= 5){
        go = prompt("Space!");
        
    }
    count ++;
    

    
    
}


alert('Spaaaacccceeeee!');

if (count == 0){document.write('<h3>' + 'It took you 1 try to get to Space!' + '</h3>');
}
else {
    document.write('<h3>' + 'It took you ' + count + ' tries to get to Space!' + '</h3>');
}
//document.write('<h3>' + 'It took you ' + count + ' tries to get to Space and you still did not make it!' + '</h3>');
}

function image(){
    let img = document.createElement("IMG");
    img.setAttribute("src", "https://mars.nasa.gov/system/content_pages/main_images/418_marsglobe.jpg");
    img.setAttribute("width", "400")
    img.setAttribute("height", "400")
    document.body.appendChild(img);


}

function imagePrinter(){
    let planet = prompt("How many times do you want to visit Mars?");
    let j = 1;

    while (j <= planet){
        image();
       j++;
    }

}
function imagePrinter2(){
    let ship = prompt("How many ships are in your fleet?");
    let i = 1;

    while (i <= ship){
        document.write('<img src="https://grid-paint.appspot.com/images/png/5946531978936320.png" width = "300" height ="100">');
        document.write('<h3>' + i + '</h3>')
       i++;
    }

}

function time(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if ( hourNow > 12 ){
       greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    document.write('<h3>' + greeting + '</h3>');
    }

function howFast(){
    let speed = prompt("How fast?")
    if (speed == 'super fast') {
        document.write('<h3>' + "You're gonna go faster than light!!!" +'</h3>')
    }
    else {
    document.write('<h3>' + "You're gonna go kinda fast!" +'</h3>')
    }
    }


    

        function getNumber(){
            let inputNumber = prompt('please input a number')
            return inputNumber;
        }
        // console.log();
        let getUserNumberFromFunction = getNumber();

        console.log(getUserNumberFromFunction);


        function plusOne(numberOne){
            numberOne = numberOne + 1;
            console.log(numberOne)

        }

        
        plusOne(5);