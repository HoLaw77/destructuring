/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
let John = ages[0];
let Mary = ages[1];
let Peter = ages[2];
console.log(John, Mary, Peter);
// Destructuring objects
let jobs = {
    Mike: "designer",
    Jill: "developer",
    Alicia: "accountant",
};
let {Mike, Jill, Alicia} =  jobs ;
console.log(Mike, Jill, Alicia);
// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log (johnNative, johnSecondary);
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary)

let language2 = {
    firstLanguage : "english",
    secondLanguage : "french",
    thirdLanguage : "german",
    fourthLanguage : "spanish"
}

let {firstLanguage, thirdLanguage} = language2;
console.log(firstLanguage, thirdLanguage);
// Using rest parameter syntax
let fruit = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...other] = fruit
console.log(favorite);
console.log(secondFavorite);
console.log(other); 

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah:"vegetatian",
    andrea: "steak"
};
let {brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);