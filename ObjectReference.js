
//In NodeJS, everything is a reference...
var  Goldsoft = {
   "faviDish": "Kaalo n Fish",
   "faviMovie": "GrandPa"
};

//referencing to the Goldsoft object.
var Person = Goldsoft;
Person.faviDish = "Salads n Kikooo";

console.log(Goldsoft.faviDish);

//difference btn 2 equal signs.
//double equals-- compares the values  only .... true
console.log(25 == '25'); //true
//tripple equals--- compares the values n data types... data types mostly
console.log(25 === '25'); //false...  integer vs string 


//this -refers to the current object calling it(this)... refers to current reference./calling object
var Ivan ={  //building objects that have functions .. defined 
   'printFirstname': function(){
   	console.log('my name is Ivan Mex');
   	console.log(this === Ivan); //true coz this refers to the calling object.
   	//console.log(this === Brenda); //ReferenceError: Brenda is not defined
   	console.log(this === 'Brenda'); //just putting it single quotes makes it a string.... thus defined.

   }
};

Ivan.printFirstname(); //returns true  coz this refers to the calling reference/object.  

//default calling context is global....  recall avoid the global context... can easily changed by other functions
  
 //any function that is not assigned to any object../referenced... global by context
 function doSomething(){
 	console.log('Iam global n not worthless');
 	console.log(this === global);
 }
doSomething(); //calling the function.