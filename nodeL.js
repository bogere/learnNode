
//NodeJS Basics concept.. Learn NodeJS basics for this week only.
//Bucky NOdeJS tutorials.
 //JS n NodeJS share the objects... create n access their properties in the same way.
var person = {
	Firstname: 'Bogere',
	Lastname: 'Goldsoft',
	age: 24

}
console.log(person);

//dealing with functions like JS
function addNumbers(a, b){
   return a+ b;
}
console.log(addNumbers(2,5)); //correct implementation
console.log(addNumbers()); //incorrect passing of args... Result:::: NaN... means it z not number... or Number z false.

//what about this function
function worthless(){
   console.log('eh... this function');
}
console.log(worthless());// Result-- undefined..
//undefined -- function z not return anything.

//importance of assigning variables to anonymous functions
var printBeacon = function(){
	console.log('hello there z no need 4 doctor, beacon z healthy');
}
printBeacon();//it can be called as a function... like that.

//pass them as parameters in other functions..  
setTimeout(printBeacon, 5000); // timing a function... number of times it z executed..
//printBeacon function will be executed again after 5 seconds.

//Think of restaurants business.. Get some money from code n invest it elsewhere,.agri, restaurants n tech..

//Handling multiple requests.
avoid buying more servers to satisfy the customers..  
NodeJS enable one waiter/server to take many orders from the customer n then will be notified
by the chef/DB when it finshes processing order.... Asynchronous nature... NOdeJS fast n efficient.
--dealing with the callbacks

Callbacks-- function4 that sm1/server processes while u keep on waiting or doing sth else.... then server/
sm1 doing task will give u callback when he z done... non-blocking operations.
//after processing that part , alert me immediately.... i dont need to wait for u..
//analyse this error.. not yet understood handlemultiple requests.
/home/goldsoft25/Desktop/NodeJS/skool/handleMultiple.js:8
	function cookAndDeliverFood(function(){
	                            ^^^^^^^^
SyntaxError: Unexpected token function... //not supposed to be there
//analyse this..
/home/goldsoft25/Desktop/NodeJS/skool/handleMultiple.js:17
  cookAndDeliverFood(callback){ //naming a callback... recall promise
                              ^
SyntaxError: Unexpected token {

//Error
home/goldsoft25/Desktop/NodeJS/skool/ObjectReference.js:26
   	console.log(this === Brenda);
   	                     ^
ReferenceError: Brenda is not defined
    at Object.Ivan.printFirstname (/home/goldsoft25/Desktop/NodeJS/skool/ObjectReference.js:26:26)
    at Object.<anonymous> (/home/goldsoft25/Desktop/NodeJS/skool/ObjectReference.js:30:6)

//sln:::::: code snippet********
//this -refers to the current object calling it(this)... refers to current reference./calling object
var Ivan = {  //building objects that have functions .. defined 
   'printFirstname': function(){
   	console.log('my name is Ivan Mex');
   	console.log(this === Ivan); //true coz this refers to the calling object.
   	console.log(this === Brenda); //Brenda is not defined.
   }
};
Ivan.printFirstname(); //stacktrace..... object<anonymous> ...
//when debugging NodeJS problems... look at the upper part before the 
at Object.<anonymous> (/home/goldsoft25/Desktop/NodeJS/skool/ObjectReference.js:30:6)
Ivan.printFirstname(); //returns true  coz this refers to the calling reference/object.
///surprising...
NodeJS keeps on executing all the functions above(top-down)  till it crashes.

//what about this error..
/home/goldsoft25/Desktop/NodeJS/skool/Prototype.js:32
User.prototype.destroyLife = destroyLife(){
                                          ^
SyntaxError: Unexpected token {
//it simply means the function is not well stated..  addition {} ..

//Error 6
home/goldsoft25/Desktop/NodeJS/skool/Prototype.js:33
	targetPLayer.life -= 3; //deduct 3 points .
	^
ReferenceError: targetPLayer is not defined
    at User.destroyLife (/home/goldsoft25/Desktop/NodeJS/skool/Prototype.js:33:2)
    at Object.<anonymous> (/home/goldsoft25/Desktop/NodeJS/skool/Prototype.js:38:11)
//sln::: the targetPLayer defined as parameter in  giveLife() function... was defined locally.. thus not rec
recognised in the destroyLife() function..
//line 38;;; where it is being used... Goldsoft is assigned to anonymous object... thus error..

//Error..when file holding external module is changed... or  imported module z missing
module.js:340
    throw err;
          ^
Error: Cannot find module './movies'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (/home/goldsoft25/Desktop/NodeJS/skool/modules.js:6:14)
//ensure the imported module is in the right  file path...
//what about trying to access private module.. dat is not yet exported.
vatar is PG-13

/home/goldsoft25/Desktop/NodeJS/skool/modules.js:11
 movies.playArrow(); //let try with private function..
        ^
TypeError: Object #<Object> has no method 'playArrow'
    at Object.<anonymous> (/home/goldsoft25/Desktop/NodeJS/skool/modules.js:11:9)
