
/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 17; // Should return False

if (votingAge>18) {
    console.log("True");
}
else {
    console.log("False"); 
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let lake = "Wavy";
let windSpeed = 0;

if (windSpeed<5) {
    lake = "Still";
}
console.log(lake); // Should return "Still"

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");

console.log(Number("1999")*2); // Testing to see if the result is actually an integer, should return 3998




//Task d: Write a function to multiply a*b 

function multiply(a,b) {
    return a*b;
}

console.log(multiply(2,3)); // Should return 6


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYearsCalc(myAge) {
    return myAge*7;
}

console.log(dogYearsCalc(27)); // Should return 189




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(dogAge,dogWeight) {
    if (dogAge<1) {
        if (dogAge>(7/12)) {
            return dogWeight*0.04;
        }
        else if (dogAge>(4/12)) {
            return dogWeight*0.05;
        }
        else if (dogAge>(2/12)) {
            return dogWeight*0.1;
        }
        else {
            return "Too young"
        }
    }
    else if (dogAge>=1) {
        if (dogWeight>15) {
            return dogWeight*0.02;
        }
        else if (dogWeight>11) {
            return dogWeight*0.03;
        }
        else if (dogWeight>6) {
            return dogWeight*0.04;
        }
        else {
            return dogWeight*0.05;
        }
    }
}
console.log(dogFeeder(1,15)); // Should return 0.44999999999...




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  function game(guess) {
    let opponent = Math.floor(Math.random()*3 + 1);
    if (opponent == 1) {
        console.log("The opponent chose rock");
    }
    else if (opponent == 2) {
        console.log("The opponent chose paper");
    }
    else if (opponent == 3) {
        console.log("The opponent chose scissors");
    }
    else {
        console.log("Something went wrong");
    } // Reveals what the opponent chose. Should be random when the function is called multiple times.

    if (guess == "rock") {
        guess = 1;
    }
    else if (guess == "paper") {
        guess = 2;
    }
    else if (guess == "scissors") {
        guess = 3;
    }
    else {
        console.log("Something went wrong");
    } // Converts user's guess into comparable format

    if (guess==opponent) { 
        return "It's a tie!"
    }
    else if (guess-opponent==1 || guess==1 && opponent==3) {
        return "You win!"
    }
    else {
        return "Better luck next time!"
    } // Returns result of comparison
  } 

  console.log(game("scissors")); // Depending on the opponent variable (also printed), result should be correct for the real world game
  console.log(game("scissors")); // Depending on the opponent variable (also printed), result should be correct for the real world game



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(kilometers) {
    return kilometers/1.609;
}

console.log(kmToMiles(1)); // Should print 0.621



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCM(feet) {
    return feet*30.48;
}

console.log(feetToCM(2)); // Should print 60.96


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startNum) {
    for (i=)
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





