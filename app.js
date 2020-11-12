'use strict'


function goToSpace(){
let go = prompt("Where do you wanna go?");
let count = 1;

if (go == 'Space!'){
    document.write('<h3>' + 'Spaaaacccceeeee!' + '</h3>');
    document.write('<h3>' + 'It took you ' + count + ' try to get to Space!' + '</h3>');
} else {
    go = prompt("Space?")
    if (go == 'Space!'){
        count ++; 
        document.write('<h3>' + 'Spaaaacccceeeee!' + '</h3>');
        document.write('<h3>' + 'It took you ' + count + ' tries to get to Space!' + '</h3>');
    }
    else{
        count ++; 
        go = prompt("I wanna go to space! Where do you wanna go?")
    if (go == 'Space!'){
        count ++;
        document.write('<h3>' + 'Spaaaacccceeeee!' + '</h3>');
        document.write('<h3>' + 'It took you ' + count + ' tries to get to Space!' + '</h3>');}
    else{
        count ++;
    go = prompt("Please type 'Space!'")
    if (go == 'Space!'){
        count ++;
        document.write('<h3>' + 'Spaaaacccceeeee!' + '</h3>');
    document.write('<h3>' + 'It took you ' + count + ' tries to get to Space!' + '</h3>');}
    else{document.write('<h3>' + 'Sigh' + '</h3>');
    count ++;
    document.write('<h3>' + 'It took you ' + count + ' tries to get to Space and you still did not make it!' + '</h3>');
}
    }
    }
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
    document.write('<h3>' + "You're gonna go " + speed + "!!!" +'</h3>')
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