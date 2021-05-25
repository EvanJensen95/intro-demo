////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console-log "I love to code!"
  If it is not, console-log "Coding has it's challenges."
*/ 

//CODE HERE
var lovesCode = true
if (lovesCode === true) {
  console.log("I love to code!")
} else {
  console.log("Coding has it's challenges")
}

// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE

if (amysAge < brittanisAge){
  console.log("brittani is older")
} else if (amysAge > brittanisAge){
  console.log ("amy is older")
}
else {
  console.log("they are the same age")
}


////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE

if (amysBirthYear === brittanisBirthYear){
  console.log ('Amy & Brittani were born in the same year')
} else {
  console.log ('Amy & Brittani were not born in the same year')
}


// For problems 5-6 use the following lines of code:
var arr = [10,20,30,40,50,60]

////////// PROBLEM 4 //////////
/*
  Create a variable named 'firstItem' and set it equal to the first value of the 'arr' array.
*/

//Code Here

var firstItem = arr[0] 


////////// PROBLEM 5 //////////
/*
  Remove the last item from the 'arr' array and store it in a variable named 'lastItemRemoved'. Console.log the array to verify you no longer have the last item.
*/

//Code Here
var lastItemRemoved = arr.pop()
console.log(lastItemRemoved)




////////// PROBLEM 6 //////////





////////// PROBLEM 7 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];
// Do not edit the code above.

/*
  Loop through the 'family' array and console.log every item.
*/

//Code Here

for(let i = 0; i < family.length; i++){
  console.log(family[i])
}



////////// PROBLEM 8 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
let evensArr = []
// Do not edit the code above.

/*
  Use a for-loop to iterate through each number in the 'nums' array, if the number is even, append it to the 'evensArr'.
*/

//Code Here

for(i = 0; i < nums.length; i++){
  let element = nums[i];
  if(element % 2 === 0){
    evensArr.push(element);
  }
}
console.log(evensArr)




////////// PROBLEM 9 //////////

// Do not edit the code below.
var score = 74
// Do not edit the code above.

/*
  Determine if the letter grade of the given variable 'score'. If the variable is a 90 or above, console-log an 'A', between 80 and 89, console-log a 'B', between 70 and 79, 'C', between 60 and 69, 'D', and anything below 60 should console-log an 'F'.
*/

//Code Here

if (score >= 90){
  console.log("A")
} else if (score >= 80 && score <= 89){
  console.log("B")
} else if (score >= 70 && score <= 79){
  console.log("C")
} else if (score >= 60 && score <= 69){
  console.log("D")
} else if (score < 60){
  console.log("F")
}

////////// Intermediate Problems //////////

////////// PROBLEM 10 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to or false, if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE

let changeMyMind = true;
if (changeMyMind === true){
  console.log(changeMyMind);
}else if (changeMyMind === false){
  console.log(!changeMyMind)
}



// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

//CODE HERE

if (changeMyMind === true){
  console.log(changeMyMind);
}else{
  console.log(!changeMyMind)
}





////////// PROBLEM 11 //////////

// Do not edit the code below.
var myFavoriteNumbers = [4,8,12,16,20,24];
// Do not edit the code above.

/*
  Create a variable named 'problem9' and set it equal to the fifth value of the 'myFavoriteNumbers' array.
*/

//Code Here



// Subscripting an array can fail. What happens if you subscript to the 7th element, but there are not 7 elements in the array? Now, use an if statement to help make sure you have the correct amount of elements, and then reset your variable, 'problem9' to the value of the 7th element in the array.

//Code Here


////////// PROBLEM 12 //////////

// Do not edit the code below.
var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// Do not edit the code above.

// Use a for-loop to iterate through 'listOfNumbers', then check to see if the number is divisible by 3. If it is, console.log '{number} is divisible by 3.'

//Code Here


////////// PROBLEM 13 //////////
// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Loop backwards, starting at the end of the 'letters' array. Console-log every item in the array.
*/

//Code Here


////////// Advanced Problems //////////

////////// PROBLEM 14 //////////
// Switch statements can be excellent alternatives to look up a switch statement (I recommend W3 Schools) and try to implement one in the following.

// Do not edit the code below.
let letterGrade = 'B'
// Do not edit the code above.

/* Use a switch statement on 'letterGrade' and console.log the appropriate response.

If A: "The student is doing excellently."
If B: "The student is doing well."
If C: "The student is doing alright."
If D: "The student is not doing very well."
If F: "The student is failing."
If the letter grade is not one of the above letters, console.log 'Not an eligible grade.'
*/

//Code Here



////////// PROBLEM 15 //////////
/* The famous FizzBuzz, Devmountain style!
  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional logic, if the number your for loop is currently on is divisible by 3, console.log 'Dev'. If the number is divisible by 5, console.log 'mountain'. If the number is divisible by 5 & 3, console.log 'Devmountain'. If the number is not divisible by 5 or 3, console.log the number itself. Hint: Look up the modulo operator.

  Your output should look like:
  1
  2
  Dev
  4
  Mountain
  5
  Dev
  7
  8
  Dev
  mountain
  11
  Dev
  13
  14
  Devmountain
  16
  ...
*/

//Code Here