//describe test suite. The first argument we give to this describe function is calculator, which is a string. The second argument we give is a function. Inside of this function we want to describe another test suite - an inner test suite and the first parameter we'll give to that is going to be a string, this is addition function and this will take a parameter of function again as the second parameter.

//Anatomy of a test suite - so let's take a look at the anatomy of a test suite or spec.  we can see at our outermost layer we have the describe function and the describe function describes a test suite.  Firstly we describe our calculator test suite and this is our outermost layer.  Next up we describe a test within our calculator test suite that says addition function. The reason for this is the calculator performs multiple functions and we want a test suite of tests for each of those functions, so we want the suite of tests for addition, we want a suite of tests for subtraction and multiplication and division and so on.  Next thing we need to check that it does what it's supposed to do, so we say it should fail here or it should take two numbers and return the sum of those two numbers in this case it should return 42, and we say that it should return 42 because our addition function returns the number 42.


//describe("Calculator", function() {
    //describe("Addition function", function() {
        
// Then we make our assertions here so we say it should do X and in this case it should fail, so we inside our string will say it should fail we pass in a function again as a second parameter
        //it("should fail", function() {
            
//now here we make our X we our expectations where we expect something to do something so we use the expect function and inside right inspect function we invoke the addition function, and then we say it's toBe 42 and this says that the result of the addition function should be 42 so if we go ahead and we preview our index.html file we're going to get some errors.  It's gonna be told we're gonna be told that our spec has failed which is exactly what we want and has failed here because as we can see there's a reference errors says that the addition is not defined and that's because we haven't actually defined our addition function yet.
      //      expect(addition()).toBe(42);
    //    });
  //  });
//});


//Refractoring - now that we know our test passes we can go ahead and refactor our code, let's open up our calcSpec JS file and instead of having a failing test we'll change it so that it passes so instead of saying it should fail we want it to take two parameters or two arguments and return the sum of those arguments so we'll update our string to say this next thing we'll update the invocation of our function in the inner expectation to pass in two arguments we pass in two and two we go ahead and we can close this now otherwise it'll just run every time we save it so well in our expectation we'll pass in two and two and then we want them to be equal to four so save that.
//describe("Calculator", function() {
    //describe("Addition function", function() {
       //it("take two arguments and return the sum of those two arguments", function() {
           // expect(addition(2, 2)).toBe(4);
        //});
    //});
//});

//if we head back over to our index.html file and preview we'll see that our test does in fact pass so maybe one slight issue here we've got to write the word should and the reason for this is the sentence should read it should do X and that helps other so say addition function should take two arguments and not just helps with the readability of the results of the test suites.

//describe("Calculator", function() {
  //  describe("Addition function", function() {
    //    it("should take two arguments and return the sum of those two arguments", function() {
            //expect(addition(2, 2)).toBe(4);
        //});
    //});
//});


//now that we have one spec inside our test suite let's go and add some more. Another check that we might want to do we might want to see to make sure that the value of four isn't hard-coded So what we want to do in this case is we want to write another test that tests that let's say the number seven plus the number nineteen will return a value of 26 so let's go ahead and create a spec for that now so we'll set our expectation and our expectation is that once we call the addition function with the parameters seven and nineteen we'll expect the results to be 26. Well I'll save that and I'll reload my index.html file I'll get rid of my little stray closing bracket there save again and now we'll run our tests. And it passed and this search helps to ensure that no matter what values we pass through we will get the sum of those two numbers as opposed to just being given one single response every time we invoke the function so we know that if we pass through two plus two we'll get a result of four and we also know that if we pass through seven plus 19 we will also get result of 26



//describe("Calculator", function() {
    //describe("Addition function", function() {
        //it("should take two arguments and return the sum of those two arguments", function() {
           // expect(addition(2, 2)).toBe(4);
       // });

        //it("should not return 4 if the arguments given don't produce a sum of 4", function() {
          //  expect(addition(7, 19)).toBe(26);
        //});
   // });
// });



//Defensive Programming - we can also test to make sure that if something goes wrong it's handled correctly. For example we might want to test to make sure that the code will handle undefined values. Currently our function won't be able to carry out the addition functionality correctly if it receives the value undefined or a string we need to be able to handle such circumstances to reduce the likelihood of bugs. This is called defensive programming. What we generally try to achieve with defensive programming is to mitigate bugs and the misuse of software. It basically means that this function is liable to receive from some parameters that will cause it to function incorrectly and we need to put in some safeguards to protect against that in this case we'd need to use to alert users if the numbers aren't numbers.  Fortunately JavaScript will allow us to check the type of a value with the typeOf function if a value is not of type number then we need to show another box to the user so let's that's what we're doing here so I'm putting in an if statement to say that if either number one or number two is a number then return the sum of those two numbers else will show an alert box using the alert function and we will say the argument both arguments must be numbers. This way once our function receives any values that's not a number it will alert an alert box to the user informing them that I've used this function incorrectly.

//Spies - so in order to ensure that our defensive programming works what we need to do is we need to ensure that the alert function is actually being called and in order to test for that we need to write a test where we call our addition function and we pass through a single parameter of hello.
//the way that we check to see if a function has actually being called is jasmine has spies which allow us to spy on a function to find it so we'll know if it's been invoked or not so inside our spec we'll say spy on and our first argument that we pass through is the object that the function belongs to and in this case the first argument is window and then the second argument is a string with the name of the function which in this case is alert.
//Next up we'll invoke our addition function, we'll pass through an argument of hello.
//inside of our expectation then we'll expect window. alert and we'll expect that to have been called with so the toHavebeenCalled method will allow us to pass through a parameter and we can test it that will allow us to ensure that the alert function has been called with this specific parameter. So if we pass in both arguments must be a number as the argument the alert method would have been called with and then if we run our tests and okay we have a fail here my string is incorrect so I'll go ahead I'll say both arguments must be numbers so if I go ahead and run this test again after I save it then we should be all good and we are
//describe("Calculator", function() {
  //  describe("Addition function", function() {
    //    it("should take two arguments and return the sum of those two arguments", function() {
      //      expect(addition(2, 2)).toBe(4);
        //});

//        it("should not return 4 if the arguments given don't produce a sum of 4", function() {
  //          expect(addition(7, 19)).toBe(26);
    //    });

//        it("should have called the alert function if either number is undefined", function() {
  //          spyOn(window, "alert");
    //        addition("Hello");
      //      expect(window.alert).toHaveBeenCalledWith("Both arguments must be a number");
        //});
    //});
//});

//Refactoring - Fixing our Tests (Test driven development using Jasmine). So let's have a stab at fixing those broken tests. We'll open up out calcSpec.js file and the first thing we will do is we'll change the argument that the alert functions are being called but so it should be argument must be a number now as opposed to you plural numbers the next thing that we need to do is because our calculator is now an object what we need to do is we need to instantiate that object so we'll say var calc = new calculator and this will give us a brand new calculator object so what we need to do now is we changed the way that our calculator works our calculator now works in such a way that we add numbers to the calculators internal value. In order to end up with a value of 4 by adding the numbers 2 & 2 together, we need to call the add method twice and pass through two each time and then we can then in our expectation we need to say calculate value so we expect a calc.value to be 4. Similarly again here in our second spec we'll say that we want to add 7 to the internal value and then we want the to add 19 to the internal value so we have an internal value of 7 and then we add 19 to that value we need to expect the answer to be 26 so once again we'll update our final aspect so we'll pass through the value of hello once we say that we're gonna run and unfortunately we have one failure which is down from three which is good but let's take a look at the next lesson how to fix this  ahead and fix these tests so that they work.


//describe("Calculator", function() {

    //var calc = new Calculator();
    

    //describe("Addition function", function() {
        //it("should take two arguments and return the sum of those two arguments", function() {
           //calc.add(2);
            //calc.add(2);
          //  expect(calc.value).toBe(4);
        //});

       //it("should not return 4 if the arguments given don't produce a sum of 4", function() {
            //calc.add(7);
            //calc.add(19)
          //  expect(calc.value).toBe(26);
        //});

        //it("should have called the alert function if either number is undefined", function() {
          // spyOn(window, "alert");
        //    calc.add("Hello");
      //      expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
    //    });
  //  });
//});

//Fixing our tests - so why is this code behaving incorrectly, we don't want that answer of 30 we want an answer of 26 unfortunately this code is actually acting exactly the way we wanted to so we create a new calculator instance of the calculator object called calc then we add 2 to its internal value which gives us a total 2 and then we add another 2 which gives us a total of 4 after that we add 7 which gives us a total of 11 and then we add 19 which will give us a total of 30 the problem here is that the value is persisted across each of the specs. What we need to do is we need to separate it out so that this doesn't happen and what we can do for that is we create beforeEach and every testing framework will have something similar to this where we be able to basically create a fresh instance of the object for every test that we run so if we say calc equals new calculator inside of there now we will have a brand new calc object every time for each of the tests so if I go ahead and run my test again we will see that they all are now passing. 

describe("Calculator", function() {
    beforeEach(function() {
        calc = new Calculator();
    });
//just one last thing - we're no longer using the addition function we're now using the add method so I'll just go ahead and update that
describe("Add method", function() {
        it("should take two arguments and return the sum of those two arguments", function() {
           calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });

       it("should not return 4 if the arguments given don't produce a sum of 4", function() {
            calc.add(7);
            calc.add(19)
           expect(calc.value).toBe(26);
        });

        it("should have called the alert function if either number is undefined", function() {
           spyOn(window, "alert");
           calc.add("Hello");
         expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
     });
    });
});

