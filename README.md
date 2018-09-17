# Creating boilerplate for Jasmine Framework.

1. WHAT IS IT?

The Jasmine Framework.

2. WHAT DOES IT DO?

It automates the testing process of our code.

3. HOW DO YOU USE IT?

By referencing the necessary Jasmine JS and CSS files.

LESSON:
To get more info. on jasmine testing, head over to jasmine.github.io and this will give you some getting started tips and some documentation but for now let's go ahead and open up a new browser tab and type in Jasmine.CDN this will give us a list of CDNs that we can load Jasmine from.

The most popular is usually cdnjs.com if we click on the first results here we
brought to you cdnjs.com/libraries/jasmine and this is a list of files that we can retrieve from that CDN pertaining to Jasmine so I'm going to go back in my editor I'm gonna press alt N to create a new file and gonna press ctrl s to save that file. Here I'm prompted to enter the name of the file into a pop-up box so say index.html next up I'll create an HTML
element and inside of the HTML element I'll create a head element. Inside of
that head element I'll create a title and the title can say Jasmine testing. 

Next thing that we need to do is we need to retrieve the HTML or the CSS and
JavaScript files from CDN so let's go through this list and locate the CSS
file and once we found it will click on the little down arrow and select copy
link tag paste that into our head element. I will do the same here for the js file and will select copy script tag we'll go back to the editor will paste that into the head element. 

This will give us the JavaScript file for Jasmine and also the CSS file. In
addition to this we need two more files in order to run jasmine tests within our
browser so if we head over to our CDN tab again we need to get the Jasmine HTML and a js and boot.js file as well. 

So I'll go ahead and I'll grab the Jasmine - HTML file here and I need to make sure that I paste that in under the Jasmine.js file. Once again I'll go head back over and I'll grab the boot.js file and once again I'll add that under the Jasmine html file and we need to make sure this in specific order so we know that Jasmine is available and we know that Jasmine HTML is available to run those Jasmine tests in the browser and then boot is what would run any tests as soon as they're in the browser.

# Scripts & Specs.

1. WHAT IS IT?

Scripts & specs folders.

2. WHAT DOES IT DO?

Allows us to separate the tests from the primary source code.

3. HOW DO YOU USE IT?

By creating a directory for specs and the primary source code and referencing them in the HTML file.

LESSON:
so now that we have our Jasmine framework being referenced and all
various files associated with it we need to do is we need to start planning out
how we're going to structure our tests but also how we're going to start
structuring our source code and the common way to do this is to create two separate
folders will create one folder called spec which is usually an abbreviation
for a specification and we create one folder called scripts. So the specification 
folder is where we put our tests or the spec folder and usually this will test to ensure that the source code that we write is to the specification that is laid out in the tests. 

So what we do here is we'll go ahead and I'll right click on spec directory and create a new file called calcSpec.js and inside of the scripts directory I'll create a new file called calc.js Next thing that we need to do then is we need to start referencing these files inside of our index.html file so what I'm gonna do here is I'm gonna use comments to separate out various files that we're referencing so the first group of files that were referencing here are all
specific to the Jasmine testing framework the next ones then that we need to load our our scripts for our actual code base and then which in this instance is going to be a calculator and then after that we're going to load our tests for the calculator. 

Notice as well here this HTML file doesn't have a body element the reason for this is in this instance we don't actually need one because we're not gonna be creating elements we're just testing some JavaScript code and it is still considered to be perfectly valid HTML code too if you leave out a body element so I put in my script element to reference the calc.js file and I will do the same for the calcSpec.js file and the reason that we load in the calc.js file first is so that any functions or objects or anything that we define within the calc.js file will actually be referenceable inside of our calc.js file so that's the reasoning for the order of those so now we're actually ready to start writing some tests.

# Red-Green-Refactor.

1. WHAT IS IT?

Red-Green-Refactor.

2. WHAT DOES IT DO?

It's a philosophy for testing.

3. HOW DO YOU USE IT?

By starting off with a failing test.

LESSON:
as per the philosophy of test-driven development we begin by creating our
first tests. Firstly we need to create a test that will fail. I know it sounds
counterintuitive but before we checked if our tests pass we should
first make sure that your test is actually testing what we want to test
and the best way to do this is by seeing that it fails before we make changes to
the code. Sadly is very easy to accidentally write a test that always
passes even when the code doesn't work. This is known as red green refactor . This
means that when we want to improve our code we first add a test that should
fail then we make our planned change to the code and ensure that it makes a test
pass. Then once that we've proven that our tests can both pass and fail
and thus tests exactly what we wanted we can then optionally
refactor our code in order to make it cleaner and easier to extend while
checking that it still passes all the tests and when we're done we can
continue improving our code with a new cycle of red green refactor. So let's go
ahead and start creating some tests. Remember we create our tests inside of a
calcSpec.js file which we put inside of our spec folder so let's go ahead
and do that now we'll open up the calcSpec.js file by
double clicking on it first thing we want to do is we want to describe a test
suite and the first argument that we give to this described function is
calculator which is a string the second argument we give is a function inside of
the function we want to describe another test suite and inner test suite and the
first parameter we'll give to that is going to be a string this as addition
function and this will take a parameter of function again as the second
parameter next up we make our assertions here so we say it should do X and in
this case it should fail so we inside our string will say it should fail we
pass in a function again it's the second parameter now here we make our X we make
our expectations where we expect something to do something so we
use the expect function and inside right inspect function we invoke the addition
function and then we say it's toBe 42 and this says that the result of the
addition function should be 42 so if we go ahead and we preview our index.html
file we're going to get some errors. It's gonna be told we're gonna be told that
our spec has failed which is exactly what we want and has failed here because
as we can see there's a reference errors says that the addition is not defined and
that's because we haven't actually defined our addition function yet so
we'll go ahead and we'll define that inside of the calc.js file which is in
our scripts folder so double click on the calc.js file and we'll type in function
addition give it some parentheses and we'll open up our curly braces and we
will just return the number 42. Once we press control s and save that we can see
that we have our test passing the test suite of calculator and it's inner test
suite of addition function should fail which is not the correct wording here
but we'll address this later on.

# Anatomy of a Test Suite.

1. WHAT IS IT?

A suite of tests.

2. WHAT DOES IT DO?

Tests our application code.

3. HOW DO YOU USE IT?

By describing our tests


LESSON:
so let's take a look at the anatomy of a test suite or spec
let's open up a calcSpec.js file and we can see at our outermost layer we have
the describe function and the describe function describes a test suite.  Firstly
we describe our calculator test suite and this is our outermost layer next up
we describe a test within our calculator test suite that says addition function
the reason for this is the calculator performs multiple functions and we want
to test suite of tests for each of those functions so we want the suite of tests
for addition and we want a suite of tests for subtraction and
multiplication and division and so on next thing we need to check that it does
what it's supposed to do so we say it should fail here or it should take two
numbers and return the sum of those two numbers in this case it should return 42
and we say that it should return 42 because our addition function returns
the number 42

# REFRACTORING.

1. WHAT IS IT?

Modifying existing source code to make the test work.

2. WHAT DOES IT DO?

Allows us to modify existing code

3. HOW DO YOU USE IT?

By re-writing part of your code.


LESSON:
now that we know our test passes we can go ahead and refactor our code
let's open up our calc JS file and instead of having a failing test we'll
change it so that it passes, so instead of saying it should fail we want it to
take two parameters or two arguments and return the sum of those arguments
so we'll update our string to say this next thing we'll update the invocation
of our function in the inner expectation to pass in two arguments we pass in two
and two we go ahead and we can close this now otherwise it'll just
run every time we save it so well in our expectation we'll pass in two and two
and then we want them to be equal to four so save that and next thing we'll
go up and we'll update our calc.js file so we need to modify this now to take two
parameters so we need to take num1 and it needs to take num2 and it needs to
return num1 plus num2. This way whatever values are passed in will always
return the sum of those two numbers so we save that now and if we head back
over to our index.html file and preview
we'll see that our test does in fact pass so maybe one slight issue here we've got
to write the word should and the reason for this is the sentence should read it
should do X and that helps other so say addition function should take two
arguments and not just helps with the readability of the results of the test suites.

# Creating more tests within a test suite.

1. WHAT IS IT?

Test suites.

2. WHAT DOES IT DO?

Allows us to write additional specs.

3. HOW DO YOU USE IT?

By writing as many specs as necessary.

LESSON:
now that we have one spec inside our test suite let's go and add some more
Another check that we might want to do we might want to see to make sure
that the value of four isn't hard-coded So what we want to do in this case is we
want to write another test that tests that let's say the number seven plus the
number nineteen will return a value of 26 so let's go ahead and create a spec for
that now so we'll set our expectation and our expectation is that once we call
the addition function with the parameters seven and nineteen we'll
expect the results to be 26. Well I'll save that and I'll reload my index.html
file I'll get rid of my little stray closing bracket there save again and now
we'll run our tests. And it passed and this search helps to ensure that no matter
what values we pass through we will get the sum of those two numbers as opposed
to just being given one single response every time we invoke the function so we
know that if we pass through two plus two we'll get a result of four and we
also know that if we pass through seven plus 19 we will also get result of 26
End of transcript. Skip to the start.
  Additional Perspectives From People We Like
  

# Programming Defensively.

1. WHAT IS IT?

Defensive programming.

2. WHAT DOES IT DO?

A philosophy that encourages to write code that will catch potential issues.

3. HOW DO YOU USE IT?

By checking that values are of a specific and aren't null or undefined.

LESSON:
we can also test to make sure that if something goes wrong it's handled
correctly. For example we might want to test to make sure that the code will
handle undefined values. Currently our function won't be able to carry out the
addition functionality correctly if it receives the value undefined
or a string we need to be able to handle such circumstances to reduce the
likelihood of bugs. This is called defensive programming. What we generally
try to achieve with defensive programming is to mitigate bugs and the
misuse of software. It basically means that this function is liable to receive
from some parameters that will cause it to function incorrectly and we need to
put in some safeguards to protect against that in this case we'd need to
use to alert users if the numbers aren't numbers
fortunately JavaScript will allow us to check the type of a value with the typeOf
function if a value is not of type number then we need to show another box
to the user so let's that's what we're doing here so I'm putting in an if
statement to say that if either number one or number two is a number then
return the sum of those two numbers else will show an alert box using the alert
function and we will say the argument both arguments must be numbers. This way
once our function receives any values that's not a number it will alert an
alert box to the user informing them that I've used this function
incorrectly.

# Spies.

1. WHAT IS IT?

Spy.

2. WHAT DOES IT DO?

Spies on functions to check to see if they've been called.

3. HOW DO YOU USE IT?

By setting a spy to spy on a specific function of method.

LESSON:
so in order to ensure that our defensive programming works what we need to do is
we need to ensure that the alert function is actually being called and in order to test for that we need to write a test where we call our addition
function and we pass through a single parameter of hello and the way
that we check to see if a function has actually being called is
jasmine has spies which allow us to spy on a function to find it so we'll
know if it's been invoked or not so inside our spec we'll say spy on and
our first argument that we pass through is the object that the function belongs
to in this case the first argument is window and then the second argument is a
string with the name of the function which in this case is alert. Next up we'll
invoke our addition function will pass through an argument of hello inside of
our expectation then we'll expect window dot alert and we'll expect that to have
been called with so the toHavebeenCalled method will allow us to pass
through a parameter and we can test it that will allow us to ensure that the
alert function has been called with this specific parameter so if we pass in both
arguments must be a number as the argument the alert method would have
been called with and then if we run our tests and okay we have a fail here my a
string is incorrect so I'll go ahead I'll say both arguments must be numbers
so if I go ahead and run this test again after I save it then we should be all
good and we are


# Refractoring - Breaking our tests.

1. WHAT IS IT?

Refractoring.

2. WHAT DOES IT DO?

Sometimes extensive changes will cause our tests to fail.

3. HOW DO YOU USE IT?

By re-writing our application.

LESSON:
so now that we have our calculator built we've decided that we no longer wanted
to function in the way that it does which may seem extreme but evolving
evolving requirements for a project may require bigger
changes to a project. So what I'm going to do is I'm going to create calculator
object-- so calculator equals function this will create a calculator prototype
and inside the prototype our property of value I'm gonna set it to zero as a
default. So next thing after that I'm going to do you calculator.prototype
dot add and this will create an add function on this calculator prototype
and this function is going to take an argument of number
and we're gonna do the same check here so if typeof num number is equal to
number so if I say argument is passed in is actually a number then we're going to
set this dot value plus equal to that should be number so this will add number
to whatever the existing value is so if the existing value is zero and we add in
three the value will be changed to three and if we if we existing
value is 5 and we have pass in 5 then the value will become 10 so in our else
statement and we want to just raise our alert again here so if we say argument
must be a number and that will be fired whenever the an arguments passed through
that isn't a number we just pop this semicolon in here at the end. The problem
is I'm gonna press ctrl s and save this problem is here if I open up my index
dot HTML file and try to run these in the live previewer all of our tests fail
because we made such extensive changes to our code let's go ahead and fix these
tests so that they work.


# Refractoring - fixing our tests.

1. WHAT IS IT?

Refractoring.

2. WHAT DOES IT DO?

Allows us to make updates to our code.

3. HOW DO YOU USE IT?

This time we'll refactor our tests to work with our new application code.


LESSON:
So let's have a stab at fixing those broken tests. We'll open up out calcSpec.js
file and the first thing we will do is we'll change the argument
that the alert functions are being called but so it
should be argument must be a number now as opposed to you plural numbers the
next thing that we need to do is because our calculator is now an object what we
need to do is we need to instantiate that object so we'll say var calc =
new calculator and this will give us a brand new calculator object so what
we need to do now is we changed the way that our calculator works our
calculator now works in such a way that we add numbers to the calculators
internal value. In order to end up with a value of 4 by adding the numbers 2 &
2 together we need to call the add method twice and pass
through two each time and then we can then in our expectation we need to say
calculate value so we expect a calc.value to be 4. Similarly again
here in our second spec we'll say that we want to add 7 to the internal value
and then we want the to add 19 to the internal value so we have an internal
value of 7 and then we add 19 to that value we need to expect the answer to be 26
so once again we'll update our final aspect so we'll pass through the value
of hello once we say that we're gonna run and unfortunately we have one
failure which is down from three which is good but let's take a look at the next
lesson how to fix this


# Setting up each spec.

1. WHAT IS IT?

beforeEach.

2. WHAT DOES IT DO?

Allows us to create a fresh Calculator object before each spec.

3. HOW DO YOU USE IT?

By invoking the beforeEach function.

LESSON:
so why is this code behaving incorrectly
we don't want that answer of 30 we want an answer of 26
unfortunately this code is actually acting exactly the way we wanted to so
we create a new calculator instance of the calculator object called calc then
we add 2 to its internal value which gives us a total 2 and then we add
another 2 which gives us a total of 4 after that we add 7 which gives us a
total of 11 and then we add 19 which will give us a total of 30 the problem
here is that the value is persisted across each of the specs. What we need to
do is we need to separate it out so that this doesn't happen and what we can do
for that is we create beforeEach and every testing framework will have
something similar to this where we be able to basically create a fresh
instance of the object for every test that we run
so if we say calc equals new calculator inside of there now we will have a brand
new calc object every time for each of the tests so if I go ahead and run my
test again we will see that they all are now passing. There is just one thing
here another thing we're no longer using the addition function we're now using
the add method so I'll just go ahead and update that now and there we have it



