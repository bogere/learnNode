
//see how we use prototyping in NodeJS...
//Building a simple game..

function User(){ //global object since it has not reference yet
	 this.name ="";
	 this.life=100;

	this.giveLife = function giveLife(targetPLayer){ //what about this this.giveLife = function(){}
           targetPLayer.life += 1;
          console.log(this.name + "gave 1 life to " + targetPLayer.name);
	}

}

//Instantiating the function User()---referencing it..
var Goldsoft = new  User();
var Cherlotte = new User();
//assigning the names
Goldsoft.name = "Goldsoft";
Cherlotte.name = "Cherlotte";
//Goldsoft donating life
Goldsoft.giveLife(Cherlotte);

//printing the result..
console.log("Goldsoft :" + Goldsoft.life);
console.log("Cherlotte:" + Cherlotte.life);


// the magic of prototyping ===> adding properties n functions/methods to already defined object.
//adding functions to all objects
User.prototype.destroyLife =  function destroyLife(targetPLayer){
	targetPLayer.life -= 3; //deduct 3 points .
	//console.log(this.name + "deducted 3 points of life from" + targetPLayer);//Cherlottededucted 3 points of life from[object Object]
	 //console.log(this.name + "deducted 3 points of life from " + this.targetPLayer);
	 //Cherlottededucted 3 points of life from undefined
	 console.log(this.name + "deducted 3 points of life from " + targetPLayer.name);

};

//prototype now..
Cherlotte.destroyLife(Goldsoft);
console.log("Goldsoft:" + Goldsoft.life);
console.log("Cherlotte:" + Cherlotte.life);

//adding properties to all objects.
User.prototype.newStuff = 60;
console.log(Cherlotte.newStuff);
console.log(Goldsoft.newStuff);

