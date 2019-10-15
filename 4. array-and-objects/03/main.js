
var myPenguin = {
    name : "Whiteblack",
    origin: "Whiteblack the Penguin Sees the World",
    author: "H. A. Rey and Margret Rey",
    notes:"Children's book about a travelling penguin"
}

myPenguin.outfit = {
    hat:"baseball cap",
    shirt:"Hawaiian shirt",
    pants:"cargo shorts",
    shoes:"flip-flops"
}

var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch";
console.log(myPenguin.outfit);

myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;


for (var key in myPenguin.outfit) {
    console.log(key, myPenguin.outfit[key]);
  }
