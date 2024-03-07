let msg1=document.getElementById('msg1');
let msg2=document.getElementById('msg2');
let msg3=document.getElementById('msg3');

var result=Math.floor(Math.random()*10);
console.log(result);

var no_of_guess=0;
var guessed_num=[];

function play(){
    if(no_of_guess<3){
    let guess=document.getElementById('guess').value;
    if(guess<1 || guess>10)
    {
        alert('Please enter numbers from 0 to 10');
    }
    else{
        no_of_guess=no_of_guess+1;
        guessed_num.push(guess);
        if(guess > result){
            msg1.textContent="Your guess is high";
            msg2.textContent="No of gamer guesses:"+no_of_guess;
            msg3.textContent="Guessed Numbers are:"+guessed_num;
        }
        else if(guess < result){
            msg1.textContent="Your guess is low";
            msg2.textContent="No of gamer guesses:"+no_of_guess;
            msg3.textContent="Guessed Numbers are:"+guessed_num;
        }
        if(guess == result){
            msg1.textContent="Congrats you win";
            msg2.textContent="No of gamer guesses:"+result;
            msg3.textContent="You guessed:"+no_of_guess+"Guesses";
        }
    }
}
else{
    alert('You have reached maximum guesses!');
}
}