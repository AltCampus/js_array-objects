var myPenguin = {
    name : "Humboldt",
    origin : "Penguin Island",
    author : "Kugane Maruyama",
}

// 1
myPenguin.favoriteFoods = ["Cookies", "Pinapple", "Strawberry"];

// 2
var secondFavFood = myPenguin.favoriteFoods[1];
console.log(secondFavFood);

// 3
var firstFavFood = myPenguin.favoriteFoods[0];

// 4
myPenguin.favoriteFoods.push("Chocolates");

// 5
var len = myPenguin.favoriteFoods.length;
console.log(len);

// 6
myPenguin.favoriteFoods[len - 1] = "Litchi";

// 7 
var lastFavFood = myPenguin.favoriteFoods[len - 1];

// 8
for (var i = 0; i < len; i++) {
    console.log(myPenguin.favoriteFoods[i]);
}