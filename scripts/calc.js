
//Red-Green refractoring - so we'll go ahead and we'll define 'addition' inside of the calc.js file, which is in our scripts folder, so double click on the calc.js file and we'll type in function addition. Give it some parentheses and we'll open up our curly braces and we will just return the number 42. Once we press control s and save that we can see that we have our test passing the test suite of calculator and it's inner test suite of addition function should fail, which is not the correct wording here, but we'll address this later on.


//function addition() {
  //return 42;
//}


//Refractoring -  next thing we'll go up and we'll update our calc.js file so we need to modify this now to take two parameters so we need to take num1 and it needs to take num2 and it needs to return num1 plus num2. This way whatever values are passed in will always return the sum of those two numbers so we save that now and if we head back over to our index.html file and preview.  We'll see that our test does in fact pass.

//function addition(numOne, numTwo) {
   // return numOne + numTwo;
//}





//Defensive Programming - we can also test to make sure that if something goes wrong it's handled correctly. For example we might want to test to make sure that the code will handle undefined values. Currently our function won't be able to carry out the addition functionality correctly if it receives the value undefined or a string we need to be able to handle such circumstances to reduce the likelihood of bugs. This is called defensive programming. What we generally try to achieve with defensive programming is to mitigate bugs and the misuse of software. It basically means that this function is liable to receive from some parameters that will cause it to function incorrectly and we need to put in some safeguards to protect against that in this case we'd need to use to alert users if the numbers aren't numbers.  Fortunately JavaScript will allow us to check the type of a value with the typeOf function if a value is not of type number then we need to show another box to the user so let's that's what we're doing here so I'm putting in an if statement to say that if either number one or number two is a number then return the sum of those two numbers else will show an alert box using the alert function and we will say the argument both arguments must be numbers. This way once our function receives any values that's not a number it will alert an alert box to the user informing them that I've used this function incorrectly.


//function addition(numOne, numTwo) {
   // if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        //return numOne + numTwo;
    //} else {
        //alert("Both arguments must be numbers");
    //}
//}

//Refactoring - Breaking our Tests (Test driven development using Jasmine). So now that we have our calculator built we've decided that we no longer want it function in the way that it does, which may seem extreme but an evolving requirements for a project may require bigger changes to a project. So what I'm going to do is, I'm going to create calculator object-- so calculator equals function this will create a calculator prototype and inside the prototype our property of value I'm gonna set it to zero as a default. 

Calculator = function() {
    this.value = 0;
};

//So next thing after that I'm going to do you calculator.prototype.add and this will create an add function on this calculator prototype and this function is going to take an argument of number a

Calculator.prototype.add = function(number) {
    
//and we're gonna do the same check here so if typeof num number is equal to number, so if I say argument is passed in is actually a number then we're going to set this.value plus equal to that should be number so this will add number to whatever the existing value is so if the existing value is zero and we add in three the value will be changed to three and if we if we existing value is 5 and we have pass in 5 then the value will become 10.
    if (typeof(number) == "number") {
        this.value += number;
        
//so in our else statement, we want to just raise our alert again here so if we say argument must be a number and that will be fired whenever the an arguments passed through that isn't a number, we just pop this semicolon in here at the end. The problem is I'm gonna press ctrl s and save this problem is here if I open up my index.HTML file and try to run these in the live previewer all of our tests fail because we made such extensive changes to our code let's go ahead and fix these tests so that they work.

    } else {
        alert("Argument must be a number");
    }
};

