

//defining functions for the movie file

function playAvatar (){
	console.log('Avatar is PG-13');
}

function playArrow(){
	console.log('this serie z 4 da adults.. not kids');
}

//i want these functions to be used in other modules.
//export.playAvatar.movies = playAvatar; //implies playArrow is private function..
module.exports.avatar = playAvatar; //avatar--variable.