
//handling the multiple requests... using the callback feature.
//Asynchronous nature of the  NOdeJS-- blazing fast.

function placeOrder(orderNumber ){ //main function...

	console.log('Customer order:', orderNumber);

	    //call the cookAndDeliverFood() function
	  cookAndDeliverFood(function(){ //it holds anonymous function which will be executed with it..
		console.log('Delivered food order', orderNumber);
	});
    

}

//simulate 5 seconds operation... like DB operations...  i shall continue working on other functions while u do I/O db.
    function cookAndDeliverFood(callback){ //naming a callback... recall promise
         setTimeout(callback, 5000); //throw a callback after 5 seconds... notify the other function
}

//simulate user web requests... 6 users 
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);

//continue tomorrow to understand this..
//Be careful with ESF guys.... some like 4 volunteers who contribute to the project.
//Using NodeJS.... not really MEAN stack... use this opportunity to learn nodejs.