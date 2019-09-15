var myPenguin = {
    name : "Humboldt",
    origin : "Penguin Island",
    author : "Kugane Maruyama",
}

// 1
myPenguin.outfit = {
    hat : "Fedora",
    shirt : "T-shrt",
    pants : "Jeans",
    shoes : "Under Armour",
};

// 2
var penguinsHatType = myPenguin.outfit.hat;
console.log(penguinsHatType);

// 3
myPenguin.outfit.accessory = "Sunglasses";

// 4
myPenguin.outfit.hat = "Fedora";

// 5
delete myPenguin.outfit.pants;

// 6
for (var i in myPenguin.outfit) {
    console.log(i);
}