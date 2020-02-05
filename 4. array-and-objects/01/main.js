var myPenguin = {
    name : "Whiteblack",
    origin: "Whiteblack the Penguin Sees the World",
    author: "H. A. Rey and Margret Rey",
    notes:"Children's book about a travelling penguin",
    favoriteFood:["prawn","fish","crab"]
}

console.log (myPenguin.favoriteFood[1]);

var firstFavFood = myPenguin.favoriteFood[0];

myPenguin.favoriteFood.push("cheery");

myPenguin.favoriteFood.length;

myPenguin.favoriteFood.splice(4,1,"berry");

lastFavFood = myPenguin.favoriteFood[myPenguin.favoriteFood.length - 1];

for(var i = 0; i < myPenguin.favoriteFood.length; i++){
    console.log(myPenguin.favoriteFood[i]);
};